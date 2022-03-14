import { StyleSheet, View } from "react-native";

import ActiveTabScreen from "../screens/home/ActiveTabScreen";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const HomeTopTabNavigator = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Active" component={ActiveTabScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeTopTabNavigator;
