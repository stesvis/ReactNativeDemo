import { Card, Text } from "../ui";
import { StyleSheet, View } from "react-native";

import PressableOpacity from "../PressableOpacity";
import React from "react";
import Row from "../Row";

const TattleDeviceCard = ({
  device,
  onLongPress = () => {},
  onPress = () => {},
  style,
  ...otherProps
}) => {
  return (
    <PressableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      {...otherProps}>
      <Card style={[styles.card, style]}>
        <Row style={styles.row}>
          <Text style={styles.name}>{device.name}</Text>
          <Text>{device.productShortName}</Text>
        </Row>
      </Card>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 0,
    flex: 1,
    flexDirection: "row",
    padding: 10,
    paddingStart: 5,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  },
  name: {
    fontWeight: "bold",
  },
  row: {
    flex: 1,
  },
});

export default TattleDeviceCard;
