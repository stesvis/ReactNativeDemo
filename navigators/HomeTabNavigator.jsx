import { AuthContext } from "../context/appContext";
import MainNavigator from "./MainNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Routes } from "../misc/enums";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import useNavigationOptions from "../hooks/useNavigationOptions";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const { tabNavigationOptions } = useNavigationOptions();

  return (
    <Tab.Navigator screenOptions={(props) => tabNavigationOptions(props)}>
      <Tab.Screen
        name={Routes.homeTab}
        component={MainNavigator}
        initialParams={{ initialRouteName: Routes.tab }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Dashboard",
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
