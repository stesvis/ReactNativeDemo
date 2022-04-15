import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppContext } from "../../context/appContext";
import Enumerable from "linq";
import { Sizes } from "../../styles/sizes";

const AppText = ({
  bold,
  communityIcon,
  faIcon,
  faIcon5,
  ionIcon,
  iconColor,
  iconSize = 15,
  italic,
  materialIcon,
  placeholder,
  style,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  const color =
    Enumerable.from(style).lastOrDefault((x) => x?.color !== null)?.color ??
    themeStyle.text.color;
  iconColor =
    iconColor ??
    Enumerable.from(style).lastOrDefault((x) => x?.color !== null)?.color ??
    themeStyle.icon.color;

  return (
    <View style={styles.container}>
      {materialIcon && (
        <MaterialIcons
          color={iconColor}
          name={materialIcon}
          size={iconSize}
          style={styles.icon}
        />
      )}
      {communityIcon && (
        <MaterialCommunityIcons
          color={iconColor}
          name={communityIcon}
          size={iconSize}
          style={styles.icon}
        />
      )}
      {faIcon && (
        <FontAwesome
          color={iconColor}
          name={faIcon}
          size={iconSize}
          style={[styles.icon]}
        />
      )}
      {faIcon5 && (
        <FontAwesome5
          color={iconColor}
          name={faIcon5}
          size={iconSize}
          style={[styles.icon]}
        />
      )}
      {ionIcon && (
        <Ionicons
          color={iconColor}
          name={ionIcon}
          size={iconSize}
          style={styles.icon}
        />
      )}
      <Text
        style={[
          themeStyle.text,
          styles.text,
          bold && styles.textBold,
          italic && styles.textItalic,
          placeholder &&
            !otherProps.children && [
              themeStyle.placeholder,
              styles.placeholder,
            ],
          style,
        ]}
        {...otherProps}>
        {otherProps.children ?? placeholder}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginEnd: 5,
  },
  placeholder: {
    fontStyle: "italic",
  },
  text: {
    fontSize: Sizes.textFontSize,
  },
  textBold: {
    fontWeight: "bold",
  },
  textItalic: {
    fontStyle: "italic",
  },
});

export default AppText;
