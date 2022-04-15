import { CircleButton, ErrorMessage } from "../ui";
import { GlobalHandlerContext, LoadingContext } from "../../context/appContext";
import { Platform, StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";

import AutoComplete from "./AutoComplete";
import ButtonTypes from "../../styles/buttons";
import FormLabel from "./FormLabel";
import FormRow from "../FormRow";
import HorizontalView from "../HorizontalView";
import Modal from "../modals/Modal";
import Required from "../Required";
import Row from "../Row";
import { useFormikContext } from "formik";

const FormCustomerAutoComplete = ({
  disabled = false,
  icon,
  itemLabelProperty,
  items,
  itemValueProperty,
  label,
  name,
  onChangeText = () => {},
  onSelectItem = () => {},
  predictions,
  required,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const formik = useFormikContext();
  const {
    errors,
    handleBlur,
    handleChange,
    setFieldTouched,
    setFieldValue,
    touched,
    values,
  } = formik;

  const selectedItem = items?.find(
    (x) => x[itemValueProperty] === values[name]
  );
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const { loading, setLoading } = useContext(LoadingContext);

  const handleCreateCustomer = async (values) => {};

  const handleSelectItem = (item) => {
    // setSelectedItem(item);
    setFieldValue(name, item ? item[itemValueProperty] : null);
    setFieldTouched(name, true);
    onSelectItem(item, formik);
  };

  return (
    <>
      <FormRow style={Platform.OS === "ios" && styles.iosCustom}>
        <View
          style={[styles.container, Platform.OS === "ios" && styles.iosCustom]}>
          <Row style={{ marginBottom: 5 }}>
            <HorizontalView>
              <FormLabel horizontal text={label} />
              <Required text="*" visible={required} />
            </HorizontalView>
          </Row>
          <AutoComplete
            disabled={disabled}
            itemLabelProperty={itemLabelProperty}
            items={items}
            itemValueProperty={itemValueProperty}
            onBlur={handleBlur(name)}
            onChangeText={onChangeText}
            onSelectItem={handleSelectItem}
            predictions={predictions}
            selectedItem={selectedItem}
            {...otherProps}
          />
        </View>
        <ErrorMessage
          error={errors[name]}
          visible={touched[name] && errors[name]}
        />
      </FormRow>

      <Modal
        onClose={() => setShowCustomerForm(false)}
        // title="Add new customer"
        visible={showCustomerForm}>
        <CustomerForm loading={loading} onSubmit={handleCreateCustomer} />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    marginEnd: 10,
  },
  iosCustom: {
    zIndex: 2,
  },
});

export default FormCustomerAutoComplete;
