import { StyleSheet, View } from "react-native";

import React from "react";

const HorizontalView = ({ style, ...otherProps }) => {
  return (
    <View style={[styles.horizontal, style]} {...otherProps}>
      {otherProps.children}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
  },
});

export default HorizontalView;
