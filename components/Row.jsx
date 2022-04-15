import { StyleSheet, View } from "react-native";

import LineSeparator from "./separators/LineSeparator";
import React from "react";

const Row = ({
  children,
  flexLeft = 2.5,
  flexRight = 1,
  style,
  visible = true,
  withBorder,
  ...otherProps
}) => {
  if (!visible) return null;

  const LeftComponent = (props) =>
    Array.isArray(children) ? children[0] ?? <View /> : children;
  const RightComponent = (props) => children[1] ?? <></>;

  return (
    <>
      <View style={[styles.row, style]} {...otherProps}>
        {/* {children} */}
        <View style={[styles.leftView, { flex: flexLeft }]}>
          <LeftComponent />
        </View>
        <View style={[styles.rightView, { flex: flexRight }]}>
          <RightComponent />
        </View>
      </View>
      {withBorder && <LineSeparator />}
    </>
  );
};

const styles = StyleSheet.create({
  leftView: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rightView: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingStart: 10,
  },
  row: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Row;

// Loop thru the children

{
  /* <View style={[styles.row, style]} {...otherProps}>
  {Children.map(children, (child, index) => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      return index === 0
        ? cloneElement(child, { style: { color: "blue" } })
        : cloneElement(child, { style: { color: "brown" } });
    }

    return child;
  })}
</View> */
}
