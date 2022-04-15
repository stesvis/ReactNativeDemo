import { LinkButton, Text } from "../ui";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import LineSeparator from "../separators/LineSeparator";
import Modal from "./Modal";
import { ModalContext } from "../../context/appContext";
import Row from "../Row";

const Confirmation = ({
  animationType = "fade",
  buttons,
  message = "",
  onClose = () => {},
  title = null,
  transparent = true,
  visible,
  ...otherProps
}) => {
  const { closeConfirmation } = useContext(ModalContext);

  const handleButtonPressed = (button) => {
    closeConfirmation();
    if (button.onPress) button.onPress();
  };

  const handleClose = () => {
    closeConfirmation();
    onClose();
  };

  return (
    <Modal onClose={handleClose} title={title} visible={visible}>
      <Text>{message}</Text>
      <View style={styles.footer}>
        <LineSeparator />
        <Row flexLeft={1} flexRight={1} style={styles.buttonsRow}>
          {buttons?.map((button, index) => (
            <LinkButton
              key={`${button.title}_${index}`}
              onPress={() => handleButtonPressed(button)}
              padding={10}
              style={styles.button}
              title={button.title}
            />
          ))}
        </Row>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: "50%",
  },
  buttonsRow: {
    alignItems: "center",
    justifyContent: "space-evenly",
    // padding: 10,
    paddingTop: 10,
  },
  footer: {
    justifyContent: "center",
    // alignContent: "center",
    marginTop: 30,
  },
});

export default Confirmation;
