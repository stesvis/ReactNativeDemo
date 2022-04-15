import React, { useContext } from "react";

import { AppContext } from "../context/appContext";
import PressableOpacity from "./PressableOpacity";
import { StyleSheet } from "react-native";
import { Text } from "./ui";
import { colors } from "../styles/colors";

const PickerListItem = ({
  label,
  onPress = () => {},
  selected,
  ...otherProps
}) => {
  const {
    appTheme: { colorScheme },
  } = useContext(AppContext);

  return (
    <PressableOpacity onPress={onPress}>
      <Text
        style={[
          styles.text,
          {
            backgroundColor: selected
              ? colors[colorScheme].highlightColor
              : null,
          },
        ]}>
        {label}
      </Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default PickerListItem;
