import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { AppContext } from "../../context/appContext";
import { FontSizes } from "../../styles/sizes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PressableOpacity from "../PressableOpacity";
import { colors } from "../../styles/colors";

const AppTextInput = ({
  disabled = false,
  icon,
  inputStyle,
  name,
  onBlur = () => {},
  onChangeText = () => {},
  onEndEditing = () => {},
  onFocus = () => {},
  onPressIn = () => {},
  placeholder,
  style,
  value,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);
  const [text, setText] = useState(value);
  const [showClearButton, setShowClearButton] = useState(false);
  const textInputRef = useRef();

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleClear = () => {
    setText("");
    setShowClearButton(false);
    onChangeText("");
  };

  const handleChageText = (text) => {
    setText(text);
    onChangeText(text);
    setShowClearButton(text);
  };

  const handleEndEditing = (event) => {
    setShowClearButton(false);
    onEndEditing(event);
  };

  const handleFocus = (event) => {
    setShowClearButton(value?.length > 0);
    onFocus(event);
  };

  const handlePressIn = (event) => {
    setShowClearButton(value?.length > 0);
    onPressIn(event);
  };

  return (
    <View style={[themeStyle.formFieldContainer, styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={15}
          style={[themeStyle.inputIcon, styles.icon]}
        />
      )}
      <TextInput
        clearButtonMode="while-editing" // iOS only
        editable={!disabled}
        onBlur={onBlur}
        onEndEditing={handleEndEditing}
        onChangeText={handleChageText}
        onFocus={handleFocus}
        onPressIn={handlePressIn}
        placeholder={placeholder}
        placeholderTextColor={colors[colorScheme].placeholderTextColor}
        ref={textInputRef}
        style={[themeStyle.textInput, styles.input, inputStyle]}
        value={text}
        {...otherProps}></TextInput>
      <PressableOpacity
        onPress={handleClear}
        // visible={showClearButton} // TODO: need to solve this
        visible={false}>
        <MaterialCommunityIcons
          name="close-circle"
          size={15}
          style={[themeStyle.clearIcon, styles.clearIcon]}
        />
      </PressableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  clearIcon: {
    marginStart: 5,
  },
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 22.5,
    flexDirection: "row",
    // height: 45,
    // marginBottom: 10,
    minHeight: 45,
    overflow: "hidden",
    paddingHorizontal: 10,
    width: "100%",
  },
  icon: {
    marginEnd: 5,
  },
  input: {
    flex: 1,
    fontSize: FontSizes.defaultFontSize,
    // height: 40,
  },
});

export default AppTextInput;
