import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AppContext } from "../context/appContext";
import { Sizes } from "../styles/sizes";
import { Text } from "./ui";

const StickyFooter = ({
  FooterComponent,
  text,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  if (text)
    return (
      <View style={{ flex: 1 }}>
        <View
          style={[themeStyle.flatListFooter, styles.textFooter]}
          {...otherProps}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    );

  // otherwise...
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.footer} {...otherProps}>
        {FooterComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    zIndex: 100,
  },
  text: {
    alignItems: "center",
    fontSize: Sizes.footerFontSize,
  },
  textFooter: {
    borderRadius: 5,
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    left: 5,
    marginVertical: 2,
    overflow: "hidden",
    paddingHorizontal: 5,
    paddingVertical: 2,
    position: "absolute",
    width: "100%",
  },
});

export default StickyFooter;
