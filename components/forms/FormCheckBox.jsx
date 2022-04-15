import { ErrorMessage, Text } from "../ui";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Checkbox from "expo-checkbox";
import FormLabel from "./FormLabel";
import FormRow from "../FormRow";
import Required from "../Required";
import { palette } from "../../styles/colors";
import { useFormikContext } from "formik";

const FormCheckBox = ({
  checked,
  disabled = false,
  horizontal,
  label,
  name,
  onValuedChange = () => {},
  required,
  style,
  text,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const formik = useFormikContext();
  const { errors, setFieldTouched, setFieldValue, touched, values } = formik;

  const handleValueChange = (checked) => {
    setFieldTouched(true);
    setFieldValue(name, checked);
    onValuedChange(checked, formik);
  };

  return (
    <FormRow>
      <View
        style={[
          horizontal ? styles.horizontalContainer : styles.container,
          style,
        ]}>
        {label && (
          <View
            style={
              horizontal
                ? styles.horizontalLabelContainer
                : styles.labelContainer
            }>
            <FormLabel horizontal text={label} />
            <Required horizontal={horizontal} text="*" visible={required} />
          </View>
        )}
        <View style={styles.checkBoxContainer}>
          <Text visible={horizontal === true}>{text}</Text>
          <Checkbox
            color={palette.primary}
            disabled={disabled}
            onValueChange={handleValueChange}
            value={values[name]}
            style={styles.checkBox}
          />
          <Text visible={!horizontal}>{text}</Text>
        </View>
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
  checkBox: {
    marginHorizontal: 5,
    height: 25,
    width: 25,
  },
  checkBoxContainer: {
    flexDirection: "row",
  },
  container: {},
  horizontalContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontalError: {
    textAlign: "right",
  },
  horizontalInput: {
    flex: 1,
    textAlign: "right",
  },
  horizontalLabelContainer: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginEnd: 10,
  },
  horizontalText: {
    textAlign: "right",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    marginEnd: 10,
  },
});

export default FormCheckBox;
