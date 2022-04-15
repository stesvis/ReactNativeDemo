import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AppContext } from "../context/appContext";

const Overlay = ({ opacity, style, ...otherProps }) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  return (
    <View
      style={[
        themeStyle.overlay,
        styles.container,
        style,
        { opacity: opacity },
      ]}>
      {otherProps.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    // opacity: 0.5,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});

export default Overlay;
