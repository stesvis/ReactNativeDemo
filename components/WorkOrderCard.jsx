import { StyleSheet, View } from "react-native";

import Card from "./Card";
import React from "react";
import Row from "./Row";
import Text from "./Text";

const WorkOrderCard = ({
  onAssign = () => {},
  onLongPress = () => {},
  onPress = () => {},
  style,
  workOrder,
  ...otherProps
}) => {
  return (
    <Card style={[styles.card, style]}>
      <View style={styles.statusBar} />
      <View style={styles.content}>
        {/* row 1 */}
        <Row style={styles.row}>
          <Text faIcon="suitcase" style={styles.customer}>
            {workOrder?.customerDisplayName}
          </Text>
          <Text style={styles.date}>{workOrder?.dueDateFormatted}</Text>
        </Row>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 0,
    flex: 1,
    flexDirection: "row",
    height: 100,
    padding: 10,
    paddingStart: 5,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  customer: {
    // alignSelf: "flex-start",
    fontWeight: "bold",
  },
  date: {
    // alignSelf: "flex-end",
  },
  orderStatus: {},
  row: {
    marginVertical: 5,
  },
  statusBar: {
    backgroundColor: "red",
    height: "100%",
    marginEnd: 5,
    width: 7,
  },
});

export default WorkOrderCard;
