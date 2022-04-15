import * as Yup from "yup";

import { Form, FormDateTimePicker, SubmitButton } from "../components/forms";
import React, { useState } from "react";
import { Screen, Text } from "../components/ui";
import { ScrollView, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import SpaceSeparator from "../components/separators/SpaceSeparator";
import dayjs from "dayjs";
import moment from "moment";

const validationSchema = Yup.object().shape({
  timeTest: Yup.date()
    .required()
    .label("Time")
    .typeError("Time is a required field"),
});

const TestScreen = (props) => {
  const [formattedDate, setFormattedDate] = useState();
  const [formattedTime, setFormattedTime] = useState();

  const handleSubmit = async (values) => {
    console.log(values);
    setFormattedDate(dayjs(values.timeTest).format("MMM DD, YYYY"));
    setFormattedTime(dayjs(values.timeTest).format("HH:mm"));
  };

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <Form
          initialValues={{
            dateTest: moment("2022-04-16T22:05:00").format(),
            timeTest: moment("T12:00AM").format(), // TODO: would be nice to just pass a time string like "22:05"
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}>
          <FormDateTimePicker
            horizontal
            label="DATE picker"
            mode="date"
            name="dateTest"
            required
            width={200}
          />
          <FormDateTimePicker
            horizontal
            label="TIME picker"
            mode="time"
            name="timeTest"
            required
            width={200}
          />
          <SubmitButton title="Submit" />


        </Form>

        <SpaceSeparator height={100} />
        <Text>Formatted date: {formattedDate}</Text>
        <Text>Formatted time: {formattedTime}</Text>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default TestScreen;
