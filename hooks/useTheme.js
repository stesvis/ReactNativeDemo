import { darkTheme, lightTheme } from "../styles/themes";

import { useColorScheme } from "react-native";

export default useTheme = () => {
  const colorScheme = useColorScheme();

  const setTheme = async () => {
    const forceDarkMode = true;
    let newTheme = null;

    newTheme = colorScheme;

    const newColorScheme = forceDarkMode
      ? "dark"
      : newTheme === "auto" || !newTheme
      ? colorScheme
      : newTheme;
    const isDarkMode = forceDarkMode ? true : newColorScheme === "dark";
    const themeStyle = forceDarkMode
      ? darkTheme
      : isDarkMode
      ? darkTheme
      : lightTheme;

    return {
      isDarkMode: isDarkMode,
      colorScheme: newColorScheme,
      themeStyle: themeStyle,
    };
  };

  return { setTheme };
};
