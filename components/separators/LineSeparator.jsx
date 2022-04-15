import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AppContext } from "../../context/appContext";

const LineSeparator = ({ style, ...otherProps }) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  return <View style={[themeStyle.lineSeparator, styles.separator, style]} />;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
  },
});

export default LineSeparator;
