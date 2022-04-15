import { LinkButton, Text } from "../ui";
import React, { useContext, useEffect, useState } from "react";
import { SectionList, StyleSheet, View } from "react-native";

import { AppContext } from "../../context/appContext";
import FormLabel from "../forms/FormLabel";
import LineSeparator from "../separators/LineSeparator";
import Modal from "./Modal";
import PickerListItem from "../PickerListItem";
import Row from "../Row";
import { colors } from "../../styles/colors";

const ModalUserPicker = ({
  data,
  itemLabelProperty,
  itemValueProperty,
  multiselect,
  onClose = () => {},
  onSelectUser = () => {},
  onSelectUsers = () => {},
  PickerItemComponent = PickerListItem,
  selectedUserId,
  selectedUserIds = [],
  title,
  visible,
  ...otherProps
}) => {
  const [selectedValue, setSelectedValue] = useState(selectedUserId);
  const [selectedValues, setSelectedValues] = useState(selectedUserIds ?? []);

  const {
    appTheme: { colorScheme },
  } = useContext(AppContext);

  // useEffect(() => {
  //   if (multiselect) return setSelectedValues(selectedUserIds);

  //   setSelectedValue(selectedUserId);
  // }, [selectedUserId, selectedUserIds]);

  const handleClose = () => {
    onClose({ userId: selectedValue, userIds: selectedValues });
  };

  const handleRemoveSelection = () => {
    if (multiselect) {
      setSelectedValues([]);
      onSelectUsers([]);
    } else {
      setSelectedValue(null);
      onSelectUser(null);
    }

    // onClose({ userId: null, userIds: [] });
  };

  const handleSelection = (item) => {
    if (!multiselect) {
      setSelectedValue(item[itemValueProperty]);
      return onSelectUser(item);
    }

    // multiselect
    let updatedValues = [...selectedValues];
    if (selectedValues?.some((x) => x === item[itemValueProperty]))
      // unselected
      updatedValues = selectedValues.filter(
        (x) => x !== item[itemValueProperty]
      );
    // selected
    else updatedValues = [...selectedValues, item[itemValueProperty]];

    setSelectedValues(updatedValues);
    const users = data
      ?.flatMap((x) => x.data)
      .filter((x) => updatedValues.includes(x[itemValueProperty]));

    onSelectUsers(users);
  };

  return (
    <Modal
      onClose={handleClose}
      // title={title}
      visible={visible}>
      <View style={styles.modalContainer}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            const selected = multiselect
              ? selectedValues?.some((x) => x === item[itemValueProperty])
              : item[itemValueProperty] === selectedValue;

            // console.log(item[itemLabelProperty], selected);

            return (
              <PickerItemComponent
                item={item}
                itemLabelProperty={itemLabelProperty}
                label={item[itemLabelProperty]}
                onPress={() => handleSelection(item)}
                selected={selected}
              />
            );
          }}
          renderSectionHeader={({ section: { branch } }) => (
            <FormLabel style={{ marginTop: 15 }} text={branch} />
          )}
          ItemSeparatorComponent={LineSeparator}
          ListHeaderComponent={
            <Row flexLeft={1} flexRight={1}>
              <Text
                style={[
                  { color: colors[colorScheme].modalTitleColor },
                  styles.title,
                ]}
                visible={title}>
                {title}
              </Text>
              <LinkButton
                disabled={
                  !selectedValue &&
                  (!selectedValues || selectedValues?.length === 0)
                }
                onPress={handleRemoveSelection}
                title="Remove Selection"
                uppercase={false}
              />
            </Row>
          }
          // ListHeaderComponentStyle={{ alignItems: "flex-end" }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {},
  title: {
    fontWeight: "bold",
  },
});

export default ModalUserPicker;
