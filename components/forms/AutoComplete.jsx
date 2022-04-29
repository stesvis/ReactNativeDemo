import { Keyboard, Platform, ScrollView, StyleSheet, View } from "react-native";
import { LinkButton, Text } from "../ui";
import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../context/appContext";
import LineSeparator from "../separators/LineSeparator";
import MenuListItem from "../MenuListItem";
import TextInput from "./TextInput";

const AutoComplete = ({
  disabled = false,
  dynamic,
  inputStyle,
  itemLabelProperty,
  items,
  itemValueProperty,
  onChangeText = () => {},
  onFocus = () => {},
  onSelectItem = () => {},
  predictions,
  selectedItem,
  style,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const [showList, setShowList] = useState(false);
  const [matches, setMatches] = useState(predictions);
  const [matchLabel, setMatchLabel] = useState(
    selectedItem ? selectedItem[itemLabelProperty] : ""
  );
  const [pageY, setPageY] = useState();
  const [lastSelectedItem, setLastSelectedItem] = useState(selectedItem);
  const {
    appTheme: { themeStyle },
  } = useContext(AppContext);
  const iOS = Platform.OS === "ios";

  useEffect(() => {
    setMatches(predictions);
  }, [predictions]);

  useEffect(() => {
    setShowList(matches?.length > 0);
  }, [matches]);

  useEffect(() => {
    setLastSelectedItem(selectedItem);
    setMatchLabel(selectedItem ? selectedItem[itemLabelProperty] : "");
  }, [selectedItem]);

  const handleChangeText = (text) => {
    setMatchLabel(text);
    onChangeText(text);
    if (!text) onSelectItem(null);

    if (!dynamic) {
      // not dynamic means that the search is handled by the component itself
      if (!text) return setMatches([]);

      setMatches(
        items.filter(
          (x) =>
            x[itemLabelProperty].toLowerCase().includes(text.toLowerCase()) ||
            text.toLowerCase().includes(x[itemLabelProperty].toLowerCase())
        )
      );
    }
  };

  const handleEsc = () => {
    // console.log("handleEsc", new Date());
    setShowList(false);
    if (lastSelectedItem) setMatchLabel(lastSelectedItem[itemLabelProperty]);
    // if (otherProps.onBlur) otherProps.onBlur();
  };

  const handleFocus = (event) => {
    setMatches(
      items.filter(
        (x) =>
          x[itemLabelProperty]
            .toLowerCase()
            .includes(matchLabel.toLowerCase()) ||
          matchLabel.toLowerCase().includes(x[itemLabelProperty].toLowerCase())
      )
    );
    setShowList(true);
    onFocus(event);
  };

  const handlePressIn = (event) => {
    setPageY(event.nativeEvent.pageY);
    handleFocus();
    // onFocus(event);
  };

  const handleSelect = (item) => {
    setLastSelectedItem(item);
    setShowList(false);
    setMatchLabel(item[itemLabelProperty]);
    onSelectItem(item);
    Keyboard.dismiss();
  };

  const scrollView = (
    <ScrollView
      style={[
        themeStyle.autoComplete,
        !iOS && styles.popup,
        !iOS && (pageY < 290 ? styles.showBelow : styles.showAbove),
      ]}
      keyboardShouldPersistTaps="handled"
      nestedScrollEnabled
      persistentScrollbar>
      {matches?.map((match) => (
        <View key={JSON.stringify(match)}>
          <MenuListItem
            itemLabelProperty={itemLabelProperty}
            item={match}
            label={match[itemLabelProperty]}
            onPress={(item) => handleSelect(item)}
            selected={
              selectedItem
                ? match[itemValueProperty] === selectedItem[itemValueProperty]
                : false
            }
          />
          <LineSeparator />
        </View>
      ))}
    </ScrollView>
  );

  return (
    <View style={[styles.container, style]}>
      <TextInput
        // onBlur={handleEsc}
        onEndEditing={() => Platform.OS === "android" && handleEsc()}
        // blurOnSubmit={false}
        disabled={disabled}
        inputStyle={inputStyle}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onPressIn={handlePressIn}
        value={matchLabel}
        {...otherProps}
      />
      {/* <SpaceSeparator
        height={matches?.length > 0 && pageY < 290 ? matches.length * 40 : 0}
      /> */}
      {showList && iOS && (
        <View
          style={[
            styles.popup,
            styles.iosPopup,
            pageY < 290 ? styles.showBelow : styles.showAbove,
          ]}>
          {scrollView}
        </View>
      )}

      {showList && !iOS && scrollView}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  iosPopup: {
    zIndex: 3,
  },
  popup: {
    alignSelf: "center",
    borderWidth: 1,
    maxHeight: 250,
    // position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  showAbove: {
    position: "absolute",
    bottom: 46,
    // zIndex: 1,
  },
  showBelow: {
    position: "absolute",
    top: 46,
    // top: 1,
    // zIndex: 1,
  },
});

export default AutoComplete;
