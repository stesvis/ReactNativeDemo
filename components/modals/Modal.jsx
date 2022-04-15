import { AppContext, ModalContext } from "../../context/appContext";
import { Modal, StyleSheet } from "react-native";
import React, { useContext } from "react";

import ModalContainer from "./ModalContainer";
import Overlay from "../Overlay";
import { Text } from "../ui";
import { colors } from "../../styles/colors";

const AppModal = ({
  animationType = "fade",
  hideCloseButton = false,
  onClose = () => {},
  title = null,
  transparent = true,
  visible,
  ...otherProps
}) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);
  const { closeModal } = useContext(ModalContext);

  // const [modalVisible, setModalVisible] = useState(visible);

  // useEffect(() => {
  //   setModalVisible(visible);
  // }, [visible]);

  const handleClose = () => {
    closeModal();
    onClose();
  };

  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}>
      <Overlay>
        <ModalContainer
          hideCloseButton={hideCloseButton}
          onClose={handleClose}
          title={title}>
          <Text
            style={[
              { color: colors[colorScheme].modalTitleColor },
              styles.title,
            ]}
            visible={title}>
            {title}
          </Text>
          {otherProps.children}
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default AppModal;
