import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { AppContext } from "../../context/appContext";
import { StatusBar } from "expo-status-bar";
import { palette } from "../../styles/colors";

const TabScreen = ({ hideStatusBar = false, style, ...otherProps }) => {
  const {
    appTheme: { isDarkMode, themeStyle },
  } = useContext(AppContext);
  const android = Platform.OS === "android";

  return (
    <View style={[themeStyle.screen, styles.container, style]}>
      <View style={styles.innerContainer}>
        {otherProps.children}
        <StatusBar
          style={android ? "light" : isDarkMode ? "light" : "dark"}
          backgroundColor={palette.primaryDark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    // padding: 5,
    // paddingTop: StatusBar.currentHeight + 5,
  },
  innerContainer: {
    flex: 1,
    paddingStart: 0,
    paddingTop: 0,
    paddingEnd: 0,
    paddingBottom: 0,
    paddingHorizontal: 5,
  },
});

export default TabScreen;
