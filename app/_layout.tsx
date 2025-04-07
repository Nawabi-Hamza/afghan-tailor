import React from "react";
import { useColorScheme } from "react-native"; // Detect system theme
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { lightTheme, darkTheme } from "../styles/theme"; // Import themes

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Get system theme
  const theme = colorScheme === "dark" ? darkTheme : lightTheme; // Apply correct theme

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
