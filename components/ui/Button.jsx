import { StyleSheet, Text } from "react-native";

import ButtonTypes from "../../styles/buttons";
import { FontSizes } from "../../styles/sizes";
import PressableOpacity from "../PressableOpacity";
import React from "react";

const Button = ({
  disabled,
  onPress = () => {},
  style,
  textStyle,
  title,
  type = ButtonTypes.defaultButton,
  ...otherProps
}) => {
  return (
    <PressableOpacity
      disabled={disabled}
      activeOpacity={0.75}
      onPress={onPress}
      style={[
        // buttonStyle.button,
        type.button,
        styles.button,
        style,
        disabled ? styles.buttonDisabled : null,
      ]}
      {...otherProps}>
      <Text style={[styles.text, type.text, textStyle]}>{title}</Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: FontSizes.defaultFontSize,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Button;
