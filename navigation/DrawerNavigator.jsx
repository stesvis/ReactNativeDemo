import BottomTabNavigator from "./BottomTabNavigator";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
