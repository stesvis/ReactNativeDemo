import { AppContext, GlobalHandlerContext } from "../context/appContext";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

const AppNavigationContainer = (props) => {
  const {
    appTheme: { themeStyle },
  } = useContext(AppContext);

  const handleApiError = async (response, toastError = null) => {};

  return (
    <GlobalHandlerContext.Provider value={{ handleApiError }}>
      <View style={[themeStyle.screen, styles.container]}>
        {props.children}
      </View>
    </GlobalHandlerContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default AppNavigationContainer;
