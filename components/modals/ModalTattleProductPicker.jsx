import { Button, Text } from "../ui";
import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../context/appContext";
import ButtonTypes from "../../styles/buttons";
import Checkbox from "expo-checkbox";
import LineSeparator from "../separators/LineSeparator";
import Modal from "./Modal";
import PickerListItem from "../PickerListItem";
import Row from "../Row";
import Services from "../../services/services";
import { palette } from "../../styles/colors";

const ModalTattleProductPicker = ({
  itemLabelProperty,
  itemValueProperty,
  onClose = () => {},
  onSelectProduct = () => {},
  PickerItemComponent = PickerListItem,
  selectedProductId,
  title,
  visible,
  ...otherProps
}) => {
  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState(selectedProductId);
  const [directDrop, setDirectDrop] = useState(false);

  const {
    appTheme: { colorScheme },
  } = useContext(AppContext);

  useEffect(() => {
    getProductsAsync();
  }, []);

  useEffect(() => {
    setSelectedValue(selectedProductId);
  }, [selectedProductId]);

  const getProductsAsync = async () => {
    const response = await Services.api.products.all();

    if (!response.ok) return handleApiError(response);

    setProducts(response.data);
  };

  const handleClose = () => {
    setSelectedValue(null);
    setDirectDrop(false);
    onClose();
  };

  const handleSave = () => {
    const product = products.find((x) => x.id === selectedValue);
    setSelectedValue(null);
    setDirectDrop(false);
    onSelectProduct({ product: product, directDrop: directDrop });
    onClose({ product: product, directDrop: directDrop });
  };

  const handleSelection = (item) => {
    setSelectedValue(item.id);
  };

  return (
    <Modal onClose={handleClose} title="Pick a product" visible={visible}>
      <View style={styles.modalContainer}>
        {/* <View style={styles.checkBoxContainer}>
          <Checkbox color={palette.primary} style={styles.checkBox} />
          <Text>This if for Direct Drops</Text>
        </View> */}
        <FlatList
          data={products}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              itemLabelProperty="name"
              label={item.name}
              onPress={() => handleSelection(item)}
              selected={item.id === selectedValue}
            />
          )}
          ItemSeparatorComponent={LineSeparator}
          ListFooterComponent={
            <Row>
              {/* <Button title="Cancel" /> */}
              <Button
                onPress={handleSave}
                title="Save"
                type={ButtonTypes.primary}
              />
            </Row>
          }
          ListFooterComponentStyle={{ marginTop: 10 }}
          ListHeaderComponent={
            // <Text
            //   style={[
            //     { color: colors[colorScheme].modalTitleColor },
            //     styles.title,
            //   ]}
            //   visible={title}>
            //   {title}
            // </Text>
            <View style={styles.checkBoxContainer}>
              <Checkbox
                color={palette.primary}
                onValueChange={(checked) => setDirectDrop(checked)}
                value={directDrop}
                style={styles.checkBox}
              />
              <Text>This if for Direct Drops</Text>
            </View>
          }
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    marginEnd: 5,
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  modalContainer: {
    paddingVertical: 10,
  },
  title: {
    fontWeight: "bold",
  },
});

export default ModalTattleProductPicker;
