import { Card, Text } from "../ui";
import { StyleSheet, View } from "react-native";

import PressableOpacity from "../PressableOpacity";
import React from "react";
import Row from "../Row";

const ProductCard = ({
  onLongPress = () => {},
  onPress = () => {},
  style,
  product,
  ...otherProps
}) => {
  // console.log(product);

  return (
    <PressableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      {...otherProps}>
      <Card style={[styles.card, style]}>
        <View style={styles.content}>
          {/* row 1 */}
          <Row style={styles.row}>
            <Text communityIcon="gas-station" style={styles.name}>
              {product?.name}
            </Text>
            <Text>{product?.shortName}</Text>
          </Row>
        </View>
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
  content: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
  },
  row: {
    marginVertical: 5,
  },
});

export default ProductCard;
