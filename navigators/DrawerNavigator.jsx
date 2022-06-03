import { StyleSheet, View } from "react-native";

import HomeTabNavigator from "./HomeTabNavigator";
import MainNavigator from "./MainNavigator";
import React from "react";
import { Routes } from "../misc/enums";
import { createDrawerNavigator } from "@react-navigation/drawer";
import useNavigationOptions from "../hooks/useNavigationOptions";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  const { drawerNavigationOptions } = useNavigationOptions();

  return (
    <Drawer.Navigator
      initialRouteName={Routes.home}
      screenOptions={({ route }) => drawerNavigationOptions(route)}>
      <Drawer.Screen
        name={Routes.home}
        component={HomeTabNavigator}
        options={{
          drawerLabel: "Home Page",
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DrawerNavigator;
