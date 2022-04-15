import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";
import { StyleSheet } from "react-native";
import { Text } from "../ui";

const FormLabel = ({
  horizontal,
  style,
  text,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  return (
    <Text
      style={[
        themeStyle.formLabel,
        horizontal ? styles.horizontalLabel : styles.label,
        style,
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  horizontalLabel: {
    fontWeight: "bold",
    marginEnd: 5,
  },
  label: {
    fontWeight: "bold",
  },
});

export default FormLabel;
