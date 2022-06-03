import { Screen, TabScreen } from "../components/ui";

import React from "react";
import { Routes } from "../misc/enums";
import { StyleSheet } from "react-native";
import Test2Screen from "./Test2Screen";
import TestScreen from "./TestScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import useNavigationOptions from "../hooks/useNavigationOptions";

const Tab = createMaterialTopTabNavigator();

const TabbedTestScreen = (props) => {
  const { stackNavigationOptions, topTabNavigationOptions } =
    useNavigationOptions();

  return (
    <TabScreen>
      <Tab.Navigator
        screenOptions={(props) => topTabNavigationOptions(props)}
        initialRouteName={Routes.test}>
        <Tab.Screen name={Routes.test} options={{ tabBarLabel: "TEST" }}>
          {(props) => <TestScreen {...props} />}
        </Tab.Screen>
        <Tab.Screen name={Routes.test2} options={{ tabBarLabel: "TEST 2" }}>
          {(props) => <Test2Screen {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </TabScreen>
  );
};

const styles = StyleSheet.create({});

export default TabbedTestScreen;
