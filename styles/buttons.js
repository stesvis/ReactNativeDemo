import { colors, palette } from "./colors";

const danger = {
  button: {
    backgroundColor: palette.danger,
    borderColor: "#ffffff",
  },
  icon: {
    color: "#ffffff",
  },
  text: {
    color: "#ffffff",
  },
};

const defaultButton = {
  button: {
    backgroundColor: colors.buttonBackgroundColor,
    borderColor: "#000000",
  },
  icon: {
    color: colors.buttonTextColor,
  },
  text: {
    color: colors.buttonTextColor,
  },
};

const link = {
  icon: {
    color: palette.link,
  },
  text: {
    color: palette.link,
  },
};

const primary = {
  button: {
    backgroundColor: palette.primary,
    borderColor: palette.primaryLight,
  },
  icon: {
    color: "#ffffff",
  },
  text: {
    color: "#ffffff",
  },
};

export default ButtonTypes = {
  danger,
  defaultButton,
  link,
  primary,
};
