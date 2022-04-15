import * as Application from "expo-application";

import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AppContext } from "../context/appContext";
import Services from "../services/services";
import { Text } from "./ui";

const AppInfo = ({ style, ...otherProps }) => {
  const {
    appTheme: { themeStyle },
  } = useContext(AppContext);

  return (
    <View style={[styles.container, style]}>
      <Text style={[themeStyle.formLabel, styles.appName, style]}>
        {Application.applicationName}
      </Text>
      <Text style={[styles.appVersion, style]}>
        {Services.utility.getAppVersionString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appInfo: {},
  appName: { fontWeight: "bold" },
  container: { flexDirection: "row" },
});

export default AppInfo;
