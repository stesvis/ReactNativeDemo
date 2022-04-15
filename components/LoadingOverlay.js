import { StyleSheet, View } from "react-native";

import { Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import Overlay from "./Overlay";
import React from "react";

const LoadingOverlay = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <>
      <Overlay opacity={0.5} style={styles.overlay} />
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={styles.indicator}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    opacity: 1,
    zIndex: 100,
  },
  overlay: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default LoadingOverlay;
