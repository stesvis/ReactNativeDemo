import { AppText, LinkButton } from "../ui";
import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../context/appContext";
import LineSeparator from "../separators/LineSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "../modals/Modal";
import PickerListItem from "../PickerListItem";
import PressableOpacity from "../PressableOpacity";
import Row from "../Row";
import { Sizes } from "../../styles/sizes";
import { colors } from "../../styles/colors";

const DropdownSelect = ({
  disabled = false,
  icon,
  itemLabelProperty,
  items,
  itemValueProperty,
  multiselect,
  nullable = true,
  numberOfColumns = 1,
  onBlur = () => {},
  onPress = () => {},
  onSelectItem = () => {},
  onSelectItems = () => {},
  PickerItemComponent = PickerListItem,
  placeholder,
  selectedValue, // item[itemValueProperty]
  selectedValues,
  style,
  textStyle,
  title,
  visible = true,
  width = "100%",
  ...otherProps
}) => {
  if (!visible) return null;

  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  const [currentText, setCurrentText] = useState("");

  const findItemByValue = (value) => {
    const match = items.find((x) => x[itemValueProperty] === value);
    return match;
  };

  const findItemsByValues = (values) => {
    const matches = items.filter((x) => values?.includes(x[itemValueProperty]));
    return matches;
  };

  const [selectedItem, setSelectedItem] = useState(
    findItemByValue(selectedValue)
  );
  const [selectedItems, setSelectedItems] = useState(
    findItemsByValues(selectedValues)
  );
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    if (!multiselect) {
      const match = findItemByValue(selectedValue);
      setCurrentText(match ? match[itemLabelProperty] : "");
      return setSelectedItem(match);
    }

    const matches = findItemsByValues(selectedValues);
    setSelectedItems(matches);
    setCurrentText(matches?.flatMap((x) => x[itemLabelProperty]).join(", "));
  }, [items, selectedValue, selectedValues]);

  const handleClose = () => {
    if (multiselect) return handleMultiSelection();
    setShowPicker(false);
  };

  const handleMultiSelection = () => {
    const text = selectedItems
      // .orderBy((x) => x[itemValueProperty])
      .flatMap((x) => x[itemLabelProperty])
      .join(", ");
    setCurrentText(text);
    setShowPicker(false);
    onSelectItems(selectedItems);

    return onBlur(selectedItems);
  };

  const handlePress = () => {
    setShowPicker(true);
    onPress();
  };

  const handleRemoveSelection = () => {
    setSelectedItem(null);
    onSelectItem(null);
    setSelectedItems([]);
    onSelectItems([]);
    setCurrentText("");
    setShowPicker(false);
    onBlur([]);
  };

  const handleSelection = (item) => {
    if (!multiselect) {
      setSelectedItem(item[itemValueProperty]);
      setCurrentText(item[itemLabelProperty]);
      setShowPicker(false);
      onSelectItem(item);
      return onBlur(item);
    }

    // multiselect
    if (
      selectedItems?.some(
        (x) => x[itemValueProperty] === item[itemValueProperty]
      )
    )
      // at least one selected
      setSelectedItems(
        selectedItems?.filter(
          (x) => x[itemValueProperty] !== item[itemValueProperty]
        )
      );
    // everything unselected
    else setSelectedItems([...selectedItems, item]);
  };

  const modalContent = (
    <View style={styles.modalContainer}>
      <FlatList
        data={items}
        keyboardShouldPersistTaps="always"
        keyExtractor={(item) => item[itemValueProperty]}
        numColumns={numberOfColumns}
        renderItem={({ item }) => {
          let selected = false;
          if (multiselect) {
            selected = selectedItems?.some(
              (x) => x[itemValueProperty] === item[itemValueProperty]
            );
          } else {
            selected = selectedItem
              ? item[itemValueProperty] === selectedItem[itemValueProperty]
              : false;
          }

          return (
            <PickerItemComponent
              item={item}
              label={item[itemLabelProperty]}
              onPress={() => handleSelection(item)}
              selected={selected}
            />
          );
        }}
        ItemSeparatorComponent={LineSeparator}
        // ListFooterComponent={
        //   multiselect && (
        //     <View style={styles.footer}>
        //       <LineSeparator />
        //       <Row style={styles.buttons}>
        //         <LinkButton onPress={handleMultiSelection} title="OK" />
        //       </Row>
        //     </View>
        //   )
        // }
        ListHeaderComponent={
          <Row flexLeft={1} flexRight={1}>
            <AppText
              style={[
                { color: colors[colorScheme].modalTitleColor },
                styles.title,
              ]}
              visible={title}>
              {title}
            </AppText>
            <LinkButton
              onPress={handleRemoveSelection}
              title="Remove Selection"
              uppercase={false}
            />
          </Row>
        }
        ListHeaderComponentStyle={{ marginBottom: 15 }}
      />
    </View>
  );

  return (
    <>
      <PressableOpacity
        disabled={disabled}
        onPress={handlePress}
        style={[styles.pressable, style]}>
        <View
          style={[themeStyle.formFieldContainer, styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors[colorScheme].textColor}
              style={[themeStyle.inputIcon, styles.icon]}
            />
          )}
          {selectedItem || selectedItems ? (
            <Text
              numberOfLines={2}
              style={[themeStyle.text, styles.text, textStyle]}>
              {currentText}
            </Text>
          ) : (
            <Text
              style={[themeStyle.placeholder, styles.placeholder, textStyle]}>
              {placeholder}
            </Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors[colorScheme].textColor}
            style={styles.chevron}
          />
        </View>
      </PressableOpacity>

      <Modal onClose={handleClose} visible={showPicker}>
        {modalContent}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  chevron: {
    marginStart: 5,
  },
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 22.5,
    flexDirection: "row",
    height: 45,
    paddingHorizontal: 10,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 15,
  },
  footer: {
    // backgroundColor: "yellow",
    justifyContent: "center",
    // alignContent: "center",
    marginTop: 30,
  },
  icon: {
    marginRight: 10,
  },
  modalContainer: {
    // height: "80%",
  },
  placeholder: {
    flex: 1,
    fontSize: Sizes.textFontSize,
  },
  pressable: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: Sizes.textFontSize,
  },
  title: {
    fontWeight: "bold",
  },
});

export default DropdownSelect;
