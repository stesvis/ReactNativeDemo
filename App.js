import "react-native-gesture-handler";

import * as SplashScreen from "expo-splash-screen";

import { AppContext, LoadingContext, ModalContext } from "./context/appContext";
import { StyleSheet, View } from "react-native";
import { useCallback, useEffect, useState } from "react";

import AppNavigationContainer from "./components/AppNavigationContainer";
import DrawerNavigator from "./navigators/DrawerNavigator";
import HomeTabNavigator from "./navigators/HomeTabNavigator";
import MainNavigator from "./navigators/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import TestScreen from "./screens/TestScreen";
import { Text } from "./components/ui";
import useTheme from "./hooks/useTheme";

// import DrawerNavigator from "./navigators/DrawerNavigator";

export default function App() {
  const [appTheme, setAppTheme] = useState();
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState({
    visible: false,
    title: null,
    content: null,
  });
  const [showAlert, setShowAlert] = useState({
    visible: false,
    title: null,
    message: null,
    button: null,
  });
  const [showActionSheet, setShowActionSheet] = useState({
    visible: false,
    title: null,
    items: null,
    searchable: false,
  });
  const [showConfirmation, setShowConfirmation] = useState({
    visible: false,
    title: null,
    message: null,
    buttons: null,
  });

  const theme = useTheme();

  useEffect(() => {
    initAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  const initAsync = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await resetTheme();
    } catch (error) {
      console.warn(error);
    } finally {
      setIsReady(true);
    }
  };

  const modalContextValue = {
    // Generic modal with custom content
    openModal: (options) =>
      setShowModal({
        visible: true,
        title: options.title,
        content: options.content,
      }),
    closeModal: () =>
      setShowModal({ visible: false, title: null, content: null }),

    // Simple alert with title and message (no buttons)
    showAlert: (options) =>
      setShowAlert({
        visible: true,
        title: options.title,
        message: options.message,
        button: options.button,
      }),
    closeAlert: () =>
      setShowAlert({
        visible: false,
        title: null,
        message: null,
        button: null,
      }),

    // ActionSheet with multiple menu options
    showActionSheet: (title, items, searchable = false) =>
      setShowActionSheet({
        visible: true,
        title: title,
        items: items,
        searchable: searchable,
      }),
    closeActionSheet: () =>
      setShowActionSheet({ visible: false, title: null, items: null }),

    // Confirmation dialog with buttons
    showConfirmation: (title, message, buttons) =>
      setShowConfirmation({
        visible: true,
        title,
        message,
        buttons,
      }),
    closeConfirmation: () =>
      setShowConfirmation({
        visible: false,
        title: null,
        message: null,
        buttons: null,
      }),
  };

  const resetTheme = async () => {
    const themeObject = await theme.setTheme();
    setAppTheme(themeObject);
  };

  if (!isReady) return null;

  return (
    <AppContext.Provider value={{ appTheme, setAppTheme, resetTheme }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <ModalContext.Provider value={modalContextValue}>
          <RootSiblingParent>
            <NavigationContainer>
              <AppNavigationContainer onLayout={onLayoutRootView}>
                {/* <TestScreen /> */}
                <DrawerNavigator />
              </AppNavigationContainer>
            </NavigationContainer>
          </RootSiblingParent>
        </ModalContext.Provider>
      </LoadingContext.Provider>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
