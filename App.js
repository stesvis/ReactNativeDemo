import { AppContext, LoadingContext, ModalContext } from "./context/appContext";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import AppLoading from "expo-app-loading";
import AppNavigationContainer from "./components/AppNavigationContainer";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import TestScreen from "./screens/TestScreen";
import useTheme from "./hooks/useTheme";

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

  const initAsync = async () => {
    try {
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

  if (!isReady) return <AppLoading />;

  return (
    <AppContext.Provider value={{ appTheme, setAppTheme, resetTheme }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <ModalContext.Provider value={modalContextValue}>
          {/* <RootSiblingParent>
            <NavigationContainer>
          <AppNavigationContainer> */}
          <TestScreen />
          {/* </AppNavigationContainer>
            </NavigationContainer>
          </RootSiblingParent> */}
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
