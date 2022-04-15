import { StyleSheet, View } from "react-native";

import { FontSizes } from "../styles/sizes";
import React from "react";
import { Text } from "./ui";
import { palette } from "../styles/colors";

const Required = ({
  horizontal,
  text = "*",
  visible = false,
  ...otherProps
}) => {
  if (!visible) return null;

  return (
    <Text style={styles.required} {...otherProps}>
      {horizontal ? "*" : text}
    </Text>
  );
};

const styles = StyleSheet.create({
  required: {
    color: palette.danger,
    fontSize: FontSizes.smallFontSize,
    fontStyle: "italic",
  },
});

export default Required;
