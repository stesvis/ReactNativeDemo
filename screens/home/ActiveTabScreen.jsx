import { StatusBar, StyleSheet, TextInput, View } from "react-native";

import React from "react";

const ActiveTabScreen = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  textInput: {
    backgroundColor: "#fafafa",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 10,
    width: "100%",
  },
});

export default ActiveTabScreen;
