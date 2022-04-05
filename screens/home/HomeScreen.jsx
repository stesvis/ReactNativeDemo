import { StyleSheet, View } from "react-native";

import React from "react";
import Row from "../../components/Row";
import Text from "../../components/Text";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text bold>Actual result:</Text>
      <Row style={styles.row}>
        <Text faIcon="suitcase" iconColor="red" style={{ color: "red" }}>
          This is some very long text for demo
        </Text>
        <Text bold style={{ color: "green" }}>
          Apr 15, 2022
        </Text>
      </Row>

      <Text bold>Expected result:</Text>
      <Row style={styles.row}>
        <Text faIcon="suitcase" iconColor="red" style={{ color: "red" }}>
          This is some very long tex...
        </Text>
        <Text bold style={{ color: "green" }}>
          Apr 15, 2022
        </Text>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  row: {
    backgroundColor: "#fafafa",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginBottom: 50,
    paddingHorizontal: 10,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScreen;
