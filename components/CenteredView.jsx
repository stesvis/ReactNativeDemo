import { StyleSheet, View } from "react-native";

import React from "react";

const CenteredView = ({ style, ...otherProps }) => {
  return (
    <View style={[styles.container, style]} {...otherProps}>
      {otherProps.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "lime",
    justifyContent: "center",
  },
});

export default CenteredView;
