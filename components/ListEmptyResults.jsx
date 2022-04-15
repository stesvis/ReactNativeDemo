import { StyleSheet, View } from "react-native";

import React from "react";
import { Text } from "./ui";

const ListEmptyResults = ({
  text = "No orders were found",
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
  },
  text: {
    textAlign: "center",
    width: "100%",
  },
});

export default ListEmptyResults;
