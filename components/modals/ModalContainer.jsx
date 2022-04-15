import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PressableOpacity from "../PressableOpacity";

const ModalContainer = ({
  hideCloseButton,
  onClose = () => {},
  title,
  ...props
}) => {
  const {
    appTheme: { themeStyle },
  } = useContext(AppContext);

  return (
    <SafeAreaView
      style={[
        styles.container,
        title && { maxHeight: Dimensions.get("window").height - 50 },
      ]}>
      {/* Close button */}
      {hideCloseButton || (
        <PressableOpacity onPress={onClose} style={styles.closeButton}>
          <View>
            <MaterialCommunityIcons
              color={themeStyle.icon.color}
              name="close-circle"
              size={40}
            />
          </View>
        </PressableOpacity>
      )}
      <View style={[themeStyle.modal, styles.innerContainer]}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: "flex-end",
    // position: "absolute",
    // right: -20,
    // top: -20,
    padding: 0,
    // right: 0,
    width: 40,
    zIndex: 1,
  },
  container: {
    alignItems: "center",
    // backgroundColor: "yellow",
    // maxHeight: Dimensions.get("window").height - 50,
    maxHeight: "100%",
    // padding: 20,
    width: "100%",
  },
  innerContainer: {
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 10,
    marginTop: -20,
    marginBottom: 60,
    padding: 10,
    width: "90%",
  },
});

export default ModalContainer;
