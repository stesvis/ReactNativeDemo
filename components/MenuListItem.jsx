import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useContext } from "react";
import { colors, palette } from "../styles/colors";

import { AppContext } from "../context/appContext";
import PressableOpacity from "./PressableOpacity";
import { StyleSheet } from "react-native";
import { Text } from "./ui";

const MenuListItem = ({
  communityIcon,
  faIcon,
  faIcon5,
  ionIcon,
  materialIcon,
  itemLabelProperty = "label",
  item,
  onPress = () => {},
  selected,
}) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  const color = item?.uiStyle ? palette[item.uiStyle] : themeStyle.icon.color;
  const iconSize = 20;

  return (
    <PressableOpacity
      onPress={() => onPress(item)}
      style={[
        styles.container,
        {
          backgroundColor: selected ? colors[colorScheme].highlightColor : null,
        },
      ]}>
      {materialIcon && (
        <MaterialIcons
          color={color}
          name={materialIcon}
          size={iconSize}
          style={styles.icon}
        />
      )}
      {communityIcon && (
        <MaterialCommunityIcons
          color={color}
          name={communityIcon}
          size={iconSize}
          style={styles.icon}
        />
      )}
      {faIcon && (
        <FontAwesome
          color={color}
          name={faIcon}
          size={iconSize}
          style={[styles.icon]}
        />
      )}
      {faIcon5 && (
        <FontAwesome5
          color={color}
          name={faIcon5}
          size={iconSize}
          style={[styles.icon]}
        />
      )}
      {ionIcon && (
        <Ionicons
          color={color}
          name={ionIcon}
          size={iconSize}
          style={styles.icon}
        />
      )}
      <Text style={[styles.text, { color: color }, ,]}>
        {item[itemLabelProperty]}
      </Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icon: {},
  text: {
    marginHorizontal: 10,
  },
});

export default MenuListItem;
