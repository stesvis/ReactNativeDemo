import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { ErrorMessage } from "../ui";
import FormLabel from "./FormLabel";
import FormRow from "../FormRow";
import Required from "../Required";
import TextInput from "./TextInput";
import { useFormikContext } from "formik";

const FormTextInput = ({
  autoCapitalize = "none",
  autoCorrect = false,
  disabled = false,
  horizontal,
  icon,
  label,
  name,
  onChangeText = () => {},
  required,
  style,
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

  const handleChangeText = (text) => {
    setFieldValue(name, text);
    onChangeText(text, formik);
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
        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          disabled={disabled}
          icon={icon}
          // onBlur={handleBlur(name)}
          onBlur={() => setFieldTouched(name, true)}
          onChangeText={handleChangeText}
          value={values[name]}
          style={horizontal ? styles.horizontalInput : null}
          inputStyle={horizontal ? styles.horizontalText : null}
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

export default FormTextInput;
