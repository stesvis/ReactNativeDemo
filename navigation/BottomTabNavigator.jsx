import HomeScreen from "../screens/home/HomeScreen";
import HomeTopTabNavigator from "./HomeTopTabNavigator";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
      <Tab.Screen name="Home Screen" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
