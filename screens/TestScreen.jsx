import React, { useState } from "react";
import { Screen, Text } from "../components/ui";
import { ScrollView, StyleSheet, View } from "react-native";

import PlusCircleButton from "../components/PlusCircleButton";
import StickyFooter from "../components/StickyFooter";

const TestScreen = (props) => {
  return (
    <Screen style={{ backgroundColor: "green" }}>
      <ScrollView style={{ backgroundColor: "blue", height: "100%" }}>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
        <Text>Test Screen</Text>
      </ScrollView>
      <StickyFooter
        FooterComponent={<PlusCircleButton onPress={() => alert("hello")} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default TestScreen;
