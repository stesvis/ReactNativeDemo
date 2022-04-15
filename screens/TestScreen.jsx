import * as Yup from "yup";

import { Form, FormDateTimePicker, SubmitButton } from "../components/forms";
import React, { useState } from "react";
import { Screen, Text } from "../components/ui";
import { ScrollView, StyleSheet, View } from "react-native";

import SpaceSeparator from "../components/separators/SpaceSeparator";
import dayjs from "dayjs";

const validationSchema = Yup.object().shape({
  timeTest: Yup.date()
    .required()
    .label("Time")
    .typeError("Time is a required field"),
});

const TestScreen = (props) => {
  const [formattedTime, setFormattedTime] = useState();

  const handleSubmit = async (values) => {
    console.log(values);
    setFormattedTime(dayjs(values.timeTest).format("HH:mm"));
  };

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <Form
          initialValues={{
            timeTest: "2022-04-16T22:05:00",
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

        <SpaceSeparator height={100} />
        <Text>Formatted time: {formattedTime}</Text>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default TestScreen;
