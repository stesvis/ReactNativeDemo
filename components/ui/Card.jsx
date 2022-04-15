import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AppContext } from "../../context/appContext";

const Card = ({ style, ...otherProps }) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  return (
    <View style={[themeStyle.card, styles.card, style]}>
      {otherProps.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 5,
    // android shadow
    // elevation: 10,
    // ios shadow
    // shadowOffset: {
    //   height: 5,
    //   width: 0,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
  },
});

export default Card;
