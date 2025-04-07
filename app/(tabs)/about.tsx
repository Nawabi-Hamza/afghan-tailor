import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import globalStyles from "../../styles/globalStyles"; // ✅ Import global styles

export default function AboutScreen() {
  const theme = useTheme();

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="headlineLarge" style={[globalStyles.title, { color: theme.colors.primary }]}>
        About Us
      </Text>
      <Text style={[globalStyles.subtitle, { color: theme.colors.text }]}>
        Welcome to Tailor App! We provide the best tailoring services with easy booking and order tracking.
      </Text>
    </View>
  );
}
