import React, { useContext } from "react";

import { AppContext } from "../context/appContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PressableOpacity from "./PressableOpacity";
import Row from "./Row";
import { StyleSheet } from "react-native";
import { Text } from "./ui";
import { colors } from "../styles/colors";

const CheckBoxListItem = ({ label, onPress, selected }) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  return (
    <PressableOpacity onPress={onPress}>
      <Row
        style={[
          styles.row,
          {
            backgroundColor: selected
              ? colors[colorScheme].highlightColor
              : null,
          },
        ]}>
        <Text style={[styles.text]}>{label}</Text>
        {selected && (
          <MaterialCommunityIcons
            color={themeStyle.icon.color}
            name="check"
            size={15}
          />
        )}
      </Row>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default CheckBoxListItem;
