import { Linking, StyleSheet } from "react-native";
import React, { useContext } from "react";

import { AppContext } from "../context/appContext";
import PressableOpacity from "./PressableOpacity";
import { Text } from "./ui";

const PhoneNumber = ({ phoneNumber, style, ...otherProps }) => {
  const {
    appTheme: { themeStyle },
  } = useContext(AppContext);

  const handlePress = () => {
    if (phoneNumber) Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <PressableOpacity onPress={handlePress}>
      <Text
        iconColor={themeStyle.icon.color}
        style={[themeStyle.textLink, style]}
        {...otherProps}>
        {otherProps.children}
      </Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({});

export default PhoneNumber;
