import { StyleSheet, View } from "react-native";

import CheckBoxListItem from "../CheckBoxListItem";
import DropdownSelect from "./DropdownSelect";
import { ErrorMessage } from "../ui";
import FormLabel from "./FormLabel";
import FormRow from "../FormRow";
import PickerListItem from "../PickerListItem";
import React from "react";
import Required from "../Required";
import { useFormikContext } from "formik";

const FormPicker = ({
  disabled = false,
  horizontal,
  icon,
  itemLabelProperty,
  items,
  itemValueProperty,
  label,
  multiselect,
  name,
  onSelectItem = () => {},
  required,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const formik = useFormikContext();
  const { errors, setFieldTouched, setFieldValue, touched, values } = formik;

  const handleBlur = (item) => {
    setFieldTouched(name, true);
    setFieldValue(name, item ? item[itemValueProperty] : null);
  };

  const handleSelectItem = (item) => {
    setFieldValue(name, item ? item[itemValueProperty] : null);
    setFieldTouched(name, true);
    onSelectItem(item, formik);
  };

  const handleSelectItems = (items) => {
    setFieldValue(
      name,
      items?.map((x) => x[itemValueProperty])
    );
    setFieldTouched(name, true);
    onSelectItem(items, formik);
  };

  return (
    <FormRow>
      <View style={horizontal ? styles.horizontalContainer : styles.container}>
        <View
          style={
            horizontal ? styles.horizontalLabelContainer : styles.labelContainer
          }>
          <FormLabel horizontal text={label} />
          <Required horizontal={horizontal} text="*" visible={required} />
        </View>
        <DropdownSelect
          disabled={disabled}
          horizontal={horizontal}
          icon={icon}
          itemLabelProperty={itemLabelProperty}
          items={items}
          itemValueProperty={itemValueProperty}
          multiselect={multiselect}
          // onBlur={handleBlur(name)}
          onBlur={handleBlur}
          // onChangeText={handleChange(name)}
          onSelectItem={handleSelectItem}
          onSelectItems={handleSelectItems}
          PickerItemComponent={multiselect ? CheckBoxListItem : PickerListItem}
          style={horizontal ? styles.horizontalDropdown : styles.dropdown}
          selectedValue={values[name]}
          textStyle={horizontal ? styles.horizontalDropdownText : null}
          {...otherProps}
        />
      </View>
      <ErrorMessage
        error={errors[name]}
        style={horizontal ? styles.horizontalError : null}
        visible={touched[name] && errors[name]}
      />
    </FormRow>
  );
};

const styles = StyleSheet.create({
  container: {},
  dropdown: {},
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontalDropdown: {
    alignItems: "flex-end",
  },
  horizontalDropdownText: {
    textAlign: "right",
  },
  horizontalError: {
    textAlign: "right",
  },
  horizontalLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 10,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    marginEnd: 10,
  },
});

export default FormPicker;
