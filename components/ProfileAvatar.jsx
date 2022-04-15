import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AppContext } from "../context/appContext";
import CenteredView from "./CenteredView";
import { FormLabel } from "./forms";
import HorizontalView from "./HorizontalView";
import { Text } from "./ui";

const ProfileAvatar = ({ branch, name, style, ...props }) => {
  const {
    appTheme: { themeStyle },
  } = useContext(AppContext);

  return (
    <CenteredView>
      <HorizontalView
        style={[themeStyle.drawerHeader, styles.container, style]}>
        <FontAwesome
          name="user-circle"
          color={themeStyle.icon.color}
          size={75}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <FormLabel text={name} />
          <Text style={styles.branch} visible={branch}>
            {branch}
          </Text>
        </View>
      </HorizontalView>
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  branch: {
    flex: 1,
    marginTop: 5,
    // textAlign: "center",
  },
  container: {
    alignItems: "center",
    // alignSelf: "center",
    // backgroundColor: "red",
    justifyContent: "center",
    paddingBottom: 10,
    // width: "100%",
  },
  icon: {
    marginVertical: 5,
    marginEnd: 15,
  },
  textContainer: {
    alignItems: "flex-start",
    // backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
  },
});

export default ProfileAvatar;
