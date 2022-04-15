import {
  DarkDrawerNavigationOptions,
  DarkNavigationOptions,
  DarkTabNavigationOptions,
  DarkTopTabNavigationOptions,
  LightDrawerNavigationOptions,
  LightNavigationOptions,
  LightTabNavigationOptions,
  LightTopTabNavigationOptions,
} from "../styles/navigationThemes";

import { AppContext } from "../context/appContext";
import { useContext } from "react";

export default useNavigationOptions = () => {
  const {
    appTheme: { isDarkMode },
  } = useContext(AppContext);

  const stackNavigationOptions = isDarkMode
    ? DarkNavigationOptions
    : LightNavigationOptions;

  const tabNavigationOptions = isDarkMode
    ? DarkTabNavigationOptions
    : LightTabNavigationOptions;

  const topTabNavigationOptions = isDarkMode
    ? DarkTopTabNavigationOptions
    : LightTopTabNavigationOptions;

  const drawerNavigationOptions = isDarkMode
    ? DarkDrawerNavigationOptions
    : LightDrawerNavigationOptions;

  return {
    stackNavigationOptions,
    tabNavigationOptions,
    topTabNavigationOptions,
    drawerNavigationOptions,
  };
};
