import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { colors, palette } from "./colors";

import { Platform } from "react-native";

const LightNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.primary,
    background: colors.light.navigationBackgroundColor,
  },
};

const DarkNavigationTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: colors.dark.navigationTextColor,
    background: colors.dark.navigationBackgroundColor,
  },
};

const LightNavigationOptions = {
  headerBackTitleVisible: false, // iOS only
  headerStyle: { backgroundColor: colors.light.navigationBackgroundColor },
  headerTintColor: palette.primary,
  titleStyle: { color: palette.primary },
};

const DarkNavigationOptions = {
  headerBackTitleVisible: false, // iOS only
  headerTintColor: "white",
  headerStyle: { backgroundColor: palette.primary },
  titleStyle: { color: "white" },
};

const DarkTabNavigationOptions = ({ route }) => ({
  headerShown: false,
  headerStyle: DarkNavigationOptions.headerStyle,
  headerTintColor: DarkNavigationOptions.headerTintColor,
  tabBarActiveTintColor: palette.primary,
  tabBarHideOnKeyboard: Platform.OS === "android",
  tabBarInactiveTintColor: colors.dark.tabBarInactiveTintColor,
  tabBarStyle: {
    backgroundColor: colors.dark.tabBackgroundColor,
    borderTopColor: colors.dark.tabBarBorderTopColor,
    borderTopWidth: 1,
  },
});

const LightTabNavigationOptions = ({ route }) => ({
  headerShown: false,
  headerStyle: LightNavigationOptions.headerStyle,
  headerTintColor: LightNavigationOptions.headerTintColor,
  tabBarActiveTintColor: palette.primary,
  tabBarHideOnKeyboard: Platform.OS === "android",
  tabBarInactiveTintColor: colors.light.tabBarInactiveTintColor,
  tabBarStyle: {
    backgroundColor: colors.light.tabBackgroundColor,
    borderTopColor: colors.light.tabBarBorderTopColor,
    borderTopWidth: 1,
  },
});

const DarkTopTabNavigationOptions = ({ route }) => ({
  swipeEnabled: false,
  tabBarActiveTintColor: colors.dark.topTabBarActiveTintColor,
  tabBarIndicatorStyle: {
    backgroundColor: colors.dark.topTabBarIndicatorColor,
    height: 3,
  },
  tabBarInactiveTintColor: colors.dark.topTabBarInactiveTintColor,
  tabBarStyle: {
    backgroundColor: colors.dark.topTabBarBackgroundColor,
    // height: 0,
  },
});

const LightTopTabNavigationOptions = ({ route }) => ({
  swipeEnabled: false,
  tabBarActiveTintColor: colors.light.topTabBarActiveTintColor,
  tabBarIndicatorStyle: {
    backgroundColor: colors.light.topTabBarIndicatorColor,
    height: 3,
  },
  tabBarInactiveTintColor: colors.light.topTabBarInactiveTintColor,
  tabBarStyle: {
    backgroundColor: colors.light.topTabBarBackgroundColor,
    // height: 0,
  },
});

const DarkDrawerNavigationOptions = ({ route }) => ({
  drawerActiveBackgroundColor: colors.dark.drawerActiveBackgroundColor,
  drawerActiveTintColor: colors.dark.drawerActiveTintColor,
  // drawerInactiveBackgroundColor: colors.dark.drawerInactiveBackgroundColor,
  drawerInactiveTintColor: colors.dark.drawerInactiveTintColor,
  drawerLabelStyle: { marginLeft: -20 },
  swipeEdgeWidth: 0,
  headerShown: false,
  headerStyle: DarkNavigationOptions.headerStyle,
  headerTintColor: DarkNavigationOptions.headerTintColor,
});

const LightDrawerNavigationOptions = ({ route }) => ({
  drawerActiveBackgroundColor: colors.light.drawerActiveBackgroundColor,
  drawerActiveTintColor: colors.light.drawerActiveTintColor,
  // drawerInactiveBackgroundColor: colors.light.drawerInactiveBackgroundColor,
  drawerInactiveTintColor: colors.light.drawerInactiveTintColor,
  drawerLabelStyle: { marginLeft: -20 },
  swipeEdgeWidth: 0,
  headerShown: false,
  headerStyle: LightNavigationOptions.headerStyle,
  headerTintColor: LightNavigationOptions.headerTintColor,
});

export {
  // dark
  DarkDrawerNavigationOptions,
  DarkNavigationOptions,
  DarkNavigationTheme,
  DarkTabNavigationOptions,
  DarkTopTabNavigationOptions,
  // light
  LightDrawerNavigationOptions,
  LightNavigationOptions,
  LightNavigationTheme,
  LightTabNavigationOptions,
  LightTopTabNavigationOptions,
};
