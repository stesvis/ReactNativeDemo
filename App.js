import "react-native-gesture-handler";

import DrawerNavigator from "./navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
