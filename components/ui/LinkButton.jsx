import { StyleSheet, Text } from "react-native";

import ButtonTypes from "../../styles/buttons";
import { FontSizes } from "../../styles/sizes";
import PressableOpacity from "../PressableOpacity";
import React from "react";

const LinkButton = ({
  bold,
  disabled,
  onPress = () => {},
  padding,
  style,
  textStyle,
  uppercase = true,
  title,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  return (
    <PressableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        // buttonStyle.button,
        styles.button,
        style,
        disabled ? styles.buttonDisabled : null,
        padding && { padding: padding },
      ]}
      {...otherProps}>
      <Text
        style={[
          styles.text,
          ButtonTypes.link.text,
          textStyle,
          uppercase && styles.textUppercase,
          bold && styles.textBold,
        ]}>
        {title}
      </Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: FontSizes.defaultFontSize,
    textAlign: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
});

export default LinkButton;
