import { StyleSheet, View } from "react-native";

import React from "react";
import Row from "./Row";

const DetailsRow = ({
  children,
  flexLeft = 1,
  flexRight = 2,
  style,
  ...otherProps
}) => {
  return (
    <Row
      flexLeft={flexLeft}
      flexRight={flexRight}
      style={[styles.row, style]}
      {...otherProps}>
      {children}
    </Row>
  );
};

const styles = StyleSheet.create({
  details: {
    alignSelf: "center",
    textAlign: "right",
  },
  row: {
    alignContent: "center",
    paddingVertical: 5,
  },
});

export default DetailsRow;
