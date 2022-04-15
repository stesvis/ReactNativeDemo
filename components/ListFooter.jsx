import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useContext } from "react";

import { AppContext } from "../context/appContext";
import { Sizes } from "../styles/sizes";
import { Text } from "./ui";
import { colors } from "../styles/colors";

const ListFooter = ({ count, loading, loadingMore, text }) => {
  const {
    appTheme: { colorScheme },
  } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text italic style={styles.text} visible={!loading && count > 0}>
        {text}
      </Text>
      <ActivityIndicator
        animating={loadingMore}
        color={colors[colorScheme].activityIndicatorColor}
        size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    fontSize: Sizes.footerFontSize,
    marginBottom: 10,
  },
});

export default ListFooter;
