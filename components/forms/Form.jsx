import { StyleSheet, View } from "react-native";

import { Formik } from "formik";
import React from "react";

const AppForm = ({
  flex,
  initialValues,
  onSubmit = () => {},
  style,
  validationSchema,
  ...otherProps
}) => {
  // console.log(otherProps);
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}>
      {() => (
        <View style={[styles.container, flex && styles.flexForm, style]}>
          {otherProps.children}
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  flexForm: {
    flex: 1,
  },
});

export default AppForm;
