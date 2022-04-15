import { AppContext, ModalContext } from "../../context/appContext";
import { FlatList, StyleSheet, View, VirtualizedList } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import AppModal from "./Modal";
import LineSeparator from "../separators/LineSeparator";
import MenuListItem from "../MenuListItem";
import { Text } from "../ui";
import { TextInput } from "../forms";
import { colors } from "../../styles/colors";

/**
 * Takes an array of menu items with this signature:
 * {
 *   label: "This shows as a menu option",
 *   communityIcon: "MaterialCommunityIcon"
 *   faIcon: "FontAwesome"
 *   faIcon5: "FontAwesome5"
 *   ionIcon: "Ionicons"
 *   materialIcon: "MaterialIcons"
 *   onPress: () => { } // the function to execute when the menu item is pressed
 *   uiStyle: "danger/info/link/primary/primaryDark/success/warning"
 * }
 */

const ActionSheet = ({
  animationType,
  items,
  MenuItemComponent = MenuListItem,
  onClose = () => {},
  searchable,
  title,
  visible,
  ...props
}) => {
  const [visibleItems, setVisibleItems] = useState(items);
  const [searchText, setSearchText] = useState("");

  const { closeActionSheet } = useContext(ModalContext);
  const {
    appTheme: { colorScheme },
  } = useContext(AppContext);

  useEffect(() => {
    setVisibleItems(items);
  }, [items]);

  const handleClose = () => {
    setSearchText("");
    closeActionSheet();
    onClose();
  };

  const handleItemSelected = (item) => {
    setSearchText("");
    closeActionSheet();
    if (item.onPress) {
      item.onPress();
    }
  };

  const handleSearch = ({ nativeEvent: { text } }) => {
    setSearchText(text);
    setVisibleItems(
      items?.filter(
        (x) =>
          x.label.toLowerCase().includes(text.toLowerCase()) ||
          text.toLowerCase().includes(x.label.toLowerCase())
      )
    );
  };

  return (
    <AppModal
      onClose={handleClose}
      title={searchable ? null : title}
      visible={visible}>
      <FlatList
        data={visibleItems}
        initialNumToRender={visibleItems?.length}
        ItemSeparatorComponent={LineSeparator}
        keyboardShouldPersistTaps="handled"
        keyExtractor={(item) => JSON.stringify(item)}
        ListHeaderComponent={() =>
          searchable ? (
            <View>
              <Text
                bold
                style={[{ color: colors[colorScheme].modalTitleColor }]}
                visible={title}>
                {title}
              </Text>
              <TextInput
                icon="database-search"
                onSubmitEditing={handleSearch}
                placeholder="Search branches..."
                returnKeyType="search"
                style={styles.searchBox}
                value={searchText}
                visible={true}
              />
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <MenuItemComponent
            item={item}
            label={item.label}
            communityIcon={item.communityIcon}
            faIcon={item.faIcon}
            faIcon5={item.faIcon5}
            ionIcon={item.ionIcon}
            materialIcon={item.materialIcon}
            onPress={() => handleItemSelected(item)}
            selected={item.selected}
            uiStyle={item.uiStyle}
          />
        )}
      />
    </AppModal>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 10,
    marginBottom: 5,
  },
});

export default ActionSheet;
