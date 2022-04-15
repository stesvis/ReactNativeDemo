import * as Yup from "yup";

import { Form, FormDateTimePicker, SubmitButton } from "../components/forms";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import React from "react";
import { Screen } from "../components/ui";
import SpaceSeparator from "../components/separators/SpaceSeparator";

const validationSchema = Yup.object().shape({
  timeTest: Yup.date()
    .required()
    .label("Time")
    .typeError("Time is a required field"),
});

const TestScreen = (props) => {
  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <Form
          initialValues={{
            timeTest: new Date("2022-04-16T22:05:00"),
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}>
          <FormDateTimePicker
            horizontal
            label="Pick a time"
            mode="time"
            name="timeTest"
            required
            width={200}
          />
          <SubmitButton title="Submit" />
        </Form>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default TestScreen;
