import { StyleSheet, View } from "react-native";

import React from "react";

const FormRow = ({ style, ...otherProps }) => {
  return <View style={[styles.container, style]}>{otherProps.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 20,
  },
});

export default FormRow;
