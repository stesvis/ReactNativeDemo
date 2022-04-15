import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import PressableOpacity from "./PressableOpacity";
import React from "react";
import { Sizes } from "../styles/sizes";
import { Text } from "./ui";
import { useNavigation } from "@react-navigation/native";
import useNavigationOptions from "../hooks/useNavigationOptions";

const TabHeaderTitle = ({ title }) => {
  const { stackNavigationOptions } = useNavigationOptions();
  const navigation = useNavigation();

  return (
    <View style={[stackNavigationOptions.headerStyle, styles.container]}>
      <PressableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ paddingHorizontal: 10 }}>
        <MaterialCommunityIcons
          name="menu"
          size={28}
          style={[stackNavigationOptions.titleStyle, styles.icon]}
        />
      </PressableOpacity>
      <Text style={[stackNavigationOptions.titleStyle, styles.text]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginStart: -15,
    // paddingHorizontal: 15,
    // width: "100%",
  },
  icon: {
    marginEnd: 15,
  },
  text: {
    fontSize: Sizes.navbarTitleFontSize,
  },
});

export default TabHeaderTitle;
