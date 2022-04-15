import { Platform, StyleSheet, View } from "react-native";

import AutoComplete from "./AutoComplete";
import { ErrorMessage } from "../ui";
import FormLabel from "./FormLabel";
import FormRow from "../FormRow";
import React from "react";
import Required from "../Required";
import { useFormikContext } from "formik";

const FormAutoComplete = ({
  disabled = false,
  horizontal,
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

  const handleSelectItem = (item) => {
    setFieldValue(name, item ? item[itemValueProperty] : null);
    setFieldTouched(name, true);
    onSelectItem(item, formik);
  };

  return (
    <FormRow style={Platform.OS === "ios" && styles.iosCustom}>
      <View
        style={[
          horizontal ? styles.horizontalContainer : styles.container,
          Platform.OS === "ios" && styles.iosCustom,
        ]}>
        <View
          style={
            horizontal ? styles.horizontalLabelContainer : styles.labelContainer
          }>
          <FormLabel horizontal text={label} />
          <Required horizontal={horizontal} text="*" visible={required} />
        </View>
        <AutoComplete
          disabled={disabled}
          inputStyle={horizontal && styles.horizontalAutoCompleteText}
          itemLabelProperty={itemLabelProperty}
          items={items}
          itemValueProperty={itemValueProperty}
          onBlur={handleBlur(name)}
          onChangeText={onChangeText}
          onSelectItem={handleSelectItem}
          predictions={predictions}
          selectedItem={selectedItem}
          style={horizontal && styles.horizontalAutoComplete}
          {...otherProps}
        />
      </View>
      <ErrorMessage
        error={errors[name]}
        style={horizontal && styles.horizontalError}
        visible={touched[name] && errors[name]}
      />
    </FormRow>
  );
};

const styles = StyleSheet.create({
  container: {},
  horizontalAutoComplete: {
    alignItems: "flex-end",
    flex: 1,
  },
  horizontalAutoCompleteText: {
    flex: 1,
    textAlign: "right",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  iosCustom: {
    zIndex: 2,
  },
});

export default FormAutoComplete;
