import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";
import Constants from "expo-constants";
import { palette } from "../../styles/colors";

const Screen = ({ hideStatusBar = false, style, ...otherProps }) => {
  const {
    appTheme: { isDarkMode, themeStyle },
  } = useContext(AppContext);
  const android = Platform.OS === "android";

  return (
    <SafeAreaView style={[themeStyle.screen, styles.container, style]}>
      <View style={styles.innerContainer}>
        {otherProps.children}
        <StatusBar
          style={android ? "light" : isDarkMode ? "light" : "dark"}
          backgroundColor={palette.primaryDark}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
  },
  innerContainer: {
    // flex: 1,
    height: "100%",
    paddingStart: 5,
    paddingTop: 5,
    paddingEnd: 5,
    paddingBottom: 0,
    paddingHorizontal: 5,
    width: "100%",
  },
});

export default Screen;
