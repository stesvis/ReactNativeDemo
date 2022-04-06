import React, { Children, cloneElement, isValidElement } from "react";
import { StyleSheet, View } from "react-native";

import LineSeparator from "./LineSeparator";

const Row = ({
  children,
  style,
  visible = true,
  withBorder,
  ...otherProps
}) => {
  if (!visible) return null;

  const LeftComponent = (props) => children[0];
  const RightComponent = (props) => children[1];

  return (
    <>
      <View style={[styles.row, style]} {...otherProps}>
        <View style={{ paddingEnd: 10, flex: 2 }}>
          <LeftComponent />
        </View>
        <View style={{ alignItems: "flex-end", flex: 1 }}>
          <RightComponent />
        </View>
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
