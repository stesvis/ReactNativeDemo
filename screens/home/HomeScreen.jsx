import { StyleSheet, View } from "react-native";

import { FlatList } from "react-native";
import React from "react";
import Row from "../../components/Row";
import Text from "../../components/Text";

const HomeScreen = (props) => {
  const ListItem = ({ item, index }) => (
    <Text style={{ paddingVertical: 10 }}>{index + 1}</Text>
  );

  return (
    <View style={styles.container}>
      <Text bold>Actual result:</Text>
      <Row style={styles.row}>
        <Text faIcon="suitcase" iconColor="red" style={{ color: "red" }}>
          This is some very long text for demo
        </Text>
        <Text bold style={{ color: "green", textAlign: "right" }}>
          Apr 15, 2022
        </Text>
      </Row>

      <Text bold>Expected result:</Text>
      <Row style={styles.row}>
        <Text faIcon="suitcase" iconColor="red" style={{ color: "red" }}>
          This is some very long tex...
        </Text>
        <Text bold style={{ color: "green", textAlign: "right" }}>
          Apr 15, 2022
        </Text>
      </Row>

      <Text bold>Solution :</Text>
      <Row style={styles.row}>
        <View style={{ flex: 4.3 }}>
          <Text
            faIcon="suitcase"
            numberOfLines={1}
            iconColor="red"
            style={{ color: "red", width: "85%" }}>
            This is some very long text for demo
          </Text>
        </View>
        <View style={{ flex: 1.7 }}>
          <Text
            bold
            numberOfLines={1}
            style={{ color: "green", textAlign: "right" }}>
            Apr 15, 2022
          </Text>
        </View>
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
    paddingHorizontal: 0,
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
    alignItems: "center",
  },
});

export default HomeScreen;
