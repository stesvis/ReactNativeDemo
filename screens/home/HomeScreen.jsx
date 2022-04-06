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
      <Text bold>Long text on the left:</Text>
      <Row style={styles.row}>
        <Text
          faIcon="suitcase"
          iconColor="red"
          numberOfLines={1}
          style={{ color: "red" }}>
          This is some very long text for demo purposes
        </Text>
        <Text bold style={{ color: "green", textAlign: "right" }}>
          Apr 15, 2022
        </Text>
      </Row>

      <Text bold>Long text on the right:</Text>
      <Row style={styles.row}>
        <Text bold style={{ color: "green" }}>
          Apr 15, 2022
        </Text>
        <Text
          iconColor="red"
          numberOfLines={1}
          style={{ color: "red", textAlign: "right" }}>
          This is some very long text for demo purposes
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
    alignItems: "center",
  },
});

export default HomeScreen;
