import { LinkButton, Text } from "../ui";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import LineSeparator from "../separators/LineSeparator";
import Modal from "./Modal";
import { ModalContext } from "../../context/appContext";
import Row from "../Row";

const AppAlert = ({
  animationType = "fade",
  message = "",
  button,
  onClose = () => {},
  title = null,
  transparent = true,
  visible,
  ...otherProps
}) => {
  const { closeAlert } = useContext(ModalContext);

  const handleButtonPressed = () => {
    closeAlert();
    if (button?.onPress) button.onPress();
  };

  const handleClose = () => {
    if (button) return handleButtonPressed();

    closeAlert();
    onClose();
  };

  return (
    <Modal onClose={handleClose} title={title} visible={visible}>
      <Text>{message}</Text>
      {button && (
        <View style={styles.footer}>
          <LineSeparator />
          <View style={styles.buttonsContainer}>
            <LinkButton
              onPress={() => handleButtonPressed()}
              padding={10}
              style={styles.button}
              title={button?.title}
            />
          </View>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "50%",
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    // padding: 10,
    paddingTop: 10,
  },
  footer: {
    // backgroundColor: "yellow",
    justifyContent: "center",
    // alignContent: "center",
    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default AppAlert;
