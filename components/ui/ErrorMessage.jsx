import { StyleSheet, Text } from "react-native";

import React from "react";
import { palette } from "../../styles/colors";

const ErrorMessage = ({ error, style, visible, ...otherProps }) => {
  // hide the control
  if (!visible) return null;

  return <Text style={[styles.error, style]}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: palette.danger,
  },
});

export default ErrorMessage;
