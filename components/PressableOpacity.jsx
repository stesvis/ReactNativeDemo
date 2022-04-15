import { Pressable } from "react-native";
import React from "react";

const PressableOpacity = ({
  children,
  disabled = false,
  onLongPress = () => {},
  onPress = () => {},
  onPressIn = () => {},
  onPressOut = () => {},
  style,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, style]}
      {...otherProps}>
      {children}
    </Pressable>
  );
};

export default PressableOpacity;
