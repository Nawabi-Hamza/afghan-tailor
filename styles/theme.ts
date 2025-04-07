import { MD3LightTheme as DefaultLightTheme, MD3DarkTheme as DefaultDarkTheme } from "react-native-paper";

// Improved color palette for a balanced Light & Dark mode
export const lightTheme = {
  ...DefaultLightTheme,
  colors: {
    ...DefaultLightTheme.colors,
    primary: "#7B2CBF", // Elegant Purple
    secondary: "#FFB703", // Golden Yellow
    background: "#F8F9FA", // Soft White background
    text: "#212529", // Dark Gray text
  },
};

export const darkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: "#9D4EDD", // Lighter Purple
    secondary: "#FFDD00", // Bright Gold
    background: "#1B1F3B", // Dark Navy background
    text: "#EAEAEA", // Soft White text
  },
};
