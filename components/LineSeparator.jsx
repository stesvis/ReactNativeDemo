import { StyleSheet, View } from "react-native";

import React from "react";

const LineSeparator = ({ style, ...otherProps }) => {
  return <View style={[styles.separator, style]} />;
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "gray",
    height: 1,
    width: "100%",
  },
});

export default LineSeparator;
