import { StyleSheet, View } from "react-native";

import React from "react";

const Card = ({ style, ...otherProps }) => {
  return <View style={[styles.card, style]}>{otherProps.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 5,
    // android shadow
    // elevation: 10,
    // ios shadow
    // shadowOffset: {
    //   height: 5,
    //   width: 0,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
  },
});

export default Card;
