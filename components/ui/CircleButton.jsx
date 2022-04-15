import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";

import ButtonTypes from "../../styles/buttons";
import PressableOpacity from "../PressableOpacity";
import React from "react";

const CircleButton = ({
  communityIcon,
  disabled,
  faIcon,
  faIcon5,
  ionIcon,
  iconSize = 15,
  materialIcon,
  onPress,
  size = 50,
  style,
  type = ButtonTypes.defaultButton,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  return (
    <PressableOpacity
      disabled={disabled}
      activeOpacity={0.75}
      onPress={onPress}
      style={[
        type.button,
        styles.button,
        style,
        disabled ? styles.buttonDisabled : null,
        {
          borderRadius: size / 2,
          height: size,
          width: size,
        },
      ]}
      {...otherProps}>
      {materialIcon && (
        <MaterialIcons
          name={materialIcon}
          size={iconSize}
          style={[type.icon, styles.icon]}
        />
      )}
      {communityIcon && (
        <MaterialCommunityIcons
          name={communityIcon}
          size={iconSize}
          style={[type.icon, styles.icon]}
        />
      )}
      {faIcon && (
        <FontAwesome
          name={faIcon}
          size={iconSize}
          style={[[type.icon, styles.icon]]}
        />
      )}
      {faIcon5 && (
        <FontAwesome5
          name={faIcon5}
          size={iconSize}
          style={[[type.icon, styles.icon]]}
        />
      )}
      {ionIcon && (
        <Ionicons
          name={ionIcon}
          size={iconSize}
          style={[type.icon, styles.icon]}
        />
      )}
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  icon: {},
});

export default CircleButton;
