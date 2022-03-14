import "react-native-gesture-handler";

import DrawerNavigator from "./navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      <StatusBar />
    </NavigationContainer>
  );
}
