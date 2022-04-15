import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";
import PressableOpacity from "../PressableOpacity";
import { StyleSheet } from "react-native";
import Text from "./Text";

const TextLink = ({ onPress, style, text, ...otherProps }) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  return (
    <PressableOpacity onPress={onPress} style={styles.container}>
      <Text style={[themeStyle.textLink, style]}>{text}</Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TextLink;
