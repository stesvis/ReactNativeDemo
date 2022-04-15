import { StyleSheet } from "react-native";
import { colors } from "./colors";

//-------------------------------------------------------------------//
//                            LIGHT THEME                            //
//-------------------------------------------------------------------//
const lightTheme = StyleSheet.create({
  autoComplete: {
    backgroundColor: colors.light.autoCompleteListBackgroundColor,
    borderColor: colors.light.autoCompleteListBorderColor,
  },
  autoCompleteHeader: {
    backgroundColor: colors.light.autoCompleteListHeaderBackgroundColor,
  },
  card: {
    backgroundColor: colors.light.cardBackgroundColor,
    shadowColor: colors.light.shadowColor,
  },
  clearIcon: {
    color: colors.light.clearIconColor,
  },
  drawerHeader: {
    backgroundColor: colors.light.drawerHeaderBackgroundColor,
  },
  drawerMenu: {
    backgroundColor: colors.light.cardBackgroundColor,
  },
  flatListFooter: {
    backgroundColor: colors.light.cardBackgroundColor,
    color: colors.light.textColor,
  },
  formFieldContainer: {
    backgroundColor: colors.light.textInputBackgroundColor,
    borderColor: colors.light.textInputBorderColor,
  },
  formLabel: {
    color: colors.light.formLabelColor,
  },
  highPriority: {
    backgroundColor: colors.light.highPriorityBackgroundColor,
  },
  icon: {
    color: colors.light.textColor,
  },
  inputIcon: {
    color: colors.light.inputIconColor,
  },
  lineSeparator: {
    backgroundColor: colors.light.lineSeparatorColor,
  },
  modal: {
    backgroundColor: colors.light.modalBackgroundColor,
    borderColor: colors.light.modalBorderColor,
  },
  overlay: {
    backgroundColor: colors.light.overlayBackgroundColor,
  },
  placeholder: {
    color: "gray",
  },
  screen: {
    backgroundColor: colors.light.screenBackgroundColor,
  },
  text: {
    color: colors.light.textColor,
  },
  textInput: {
    backgroundColor: colors.light.textInputBackgroundColor,
    color: colors.light.textColor,
  },
  textLink: {
    color: colors.light.textLinkColor,
  },
});

//-------------------------------------------------------------------//
//                            DARK THEME                             //
//-------------------------------------------------------------------//
const darkTheme = StyleSheet.create({
  ...lightTheme,
  autoComplete: {
    backgroundColor: colors.dark.autoCompleteListBackgroundColor,
    borderColor: colors.dark.autoCompleteListBorderColor,
  },
  autoCompleteHeader: {
    backgroundColor: colors.dark.autoCompleteListHeaderBackgroundColor,
  },
  card: {
    backgroundColor: colors.dark.cardBackgroundColor,
    shadowColor: colors.dark.shadowColor,
  },
  clearIcon: {
    color: colors.dark.clearIconColor,
  },
  drawerHeader: {
    backgroundColor: colors.dark.drawerHeaderBackgroundColor,
  },
  drawerMenu: {
    backgroundColor: colors.dark.cardBackgroundColor,
  },
  flatListFooter: {
    backgroundColor: colors.dark.cardBackgroundColor,
    color: colors.dark.textColor,
  },
  formFieldContainer: {
    backgroundColor: colors.dark.textInputBackgroundColor,
    borderColor: colors.dark.textInputBorderColor,
  },
  formLabel: {
    color: colors.dark.formLabelColor,
  },
  highPriority: {
    backgroundColor: colors.dark.highPriorityBackgroundColor,
  },
  icon: {
    color: colors.dark.textColor,
  },
  inputIcon: {
    color: colors.dark.inputIconColor,
  },
  lineSeparator: {
    backgroundColor: colors.dark.lineSeparatorColor,
  },
  modal: {
    backgroundColor: colors.dark.modalBackgroundColor,
    borderColor: colors.dark.modalBorderColor,
  },
  overlay: {
    backgroundColor: colors.dark.overlayBackgroundColor,
  },
  placeholder: {
    color: "gray",
  },
  screen: {
    backgroundColor: colors.dark.screenBackgroundColor,
  },
  text: {
    color: colors.dark.textColor,
  },
  textInput: {
    backgroundColor: colors.dark.textInputBackgroundColor,
    color: colors.dark.textColor,
  },
  textLink: {
    color: colors.dark.textLinkColor,
  },
});

export { darkTheme, lightTheme };
