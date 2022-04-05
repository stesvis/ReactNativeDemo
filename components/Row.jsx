import { StyleSheet, View } from "react-native";

import LineSeparator from "./LineSeparator";
import React from "react";

const Row = ({
  children,
  style,
  visible = true,
  withBorder,
  ...otherProps
}) => {
  if (!visible) return null;

  return (
    <>
      <View style={[styles.row, style]} {...otherProps}>
        {children}
      </View>
      {withBorder && <LineSeparator />}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Row;
