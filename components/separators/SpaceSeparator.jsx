import React from "react";
import { View, StyleSheet } from "react-native";

const SpaceSeparator = ({ height = 5, ...otherProps }) => {
  return <View style={[styles.container, { height: height }]} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default SpaceSeparator;
