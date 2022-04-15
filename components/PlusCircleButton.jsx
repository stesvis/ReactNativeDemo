import ButtonTypes from "../styles/buttons";
import CircleButton from "./ui/CircleButton";
import React from "react";
import { StyleSheet } from "react-native";

const PlusCircleButton = ({ onPress, ...otherProps }) => {
  return (
    <CircleButton
      materialIcon="add"
      iconSize={40}
      onPress={onPress}
      size={70}
      style={styles.plusButton}
      type={ButtonTypes.primary}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  plusButton: {
    alignSelf: "center",
    // borderColor: "white",
    borderWidth: 5,
    margin: 5,
  },
});

export default PlusCircleButton;
