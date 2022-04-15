import { Card, Text } from "../ui";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AppContext } from "../../context/appContext";
import { FontSizes } from "../../styles/sizes";
import PressableOpacity from "../PressableOpacity";
import Row from "../Row";

const SummaryCard = ({
  color,
  count,
  onLongPress,
  onPress,
  style,
  title,
  subTitle,
  ...otherProps
}) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  // color = color ?? colors[colorScheme].statusColors.default;
  color = color ?? themeStyle.text.color;

  return (
    <PressableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      {...otherProps}>
      <Card style={[styles.card, style]}>
        <View
          style={[
            styles.statusBar,
            {
              backgroundColor: color,
            },
          ]}
        />
        <View style={styles.content}>
          <Row>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={[styles.subTitle, { color: color }]}>
                {subTitle}
              </Text>
            </View>
            <Text style={[styles.count, { color: color }]}>{count}</Text>
          </Row>
        </View>
      </Card>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 0,
    // flex: 1,
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
  count: {
    fontSize: FontSizes.biggerFontSize,
    fontWeight: "bold",
  },
  statusBar: {
    backgroundColor: "red",
    height: "100%",
    marginEnd: 5,
    width: 7,
  },
  subTitle: {
    fontStyle: "italic",
  },
  title: {
    fontSize: FontSizes.biggerFontSize,
    fontWeight: "bold",
  },
});

export default SummaryCard;
