import { StyleSheet, View } from "react-native";

import DateTimePicker from "./DateTimePicker";
import { ErrorMessage } from "../ui";
import FormLabel from "./FormLabel";
import FormRow from "../FormRow";
import React from "react";
import Required from "../Required";
import dayjs from "dayjs";
import { useFormikContext } from "formik";

const FormDateTimePicker = ({
  horizontal,
  icon,
  label,
  mode = "date",
  name,
  onSelectDateTime = () => {},
  required,
  ...otherProps
}) => {
  const formik = useFormikContext();
  const { errors, handleBlur, handleChange, setFieldValue, touched, values } =
    formik;

  const handleSelected = (dateTime, localDateTime) => {
    // console.log(`FormDateTimePicker (${Platform.OS}) ${mode}`, dateTime);

    setFieldValue(name, dateTime);
    onSelectDateTime(dateTime, formik);
  };

  // if (mode === "time") console.log(dayjs(values[name]).format("DD/MM/YYYY"));

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
        <DateTimePicker
          date={values[name] ? new Date(values[name]) : null}
          mode={mode}
          onChangeText={handleChange(name)}
          onSelectDateTime={handleSelected}
          style={horizontal ? styles.horizontalPicker : null}
          textStyle={horizontal ? styles.horizontalPickerText : null}
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
  horizontalPicker: {
    alignItems: "flex-end",
  },
  horizontalPickerText: {
    textAlign: "right",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    marginEnd: 10,
  },
});

export default FormDateTimePicker;
