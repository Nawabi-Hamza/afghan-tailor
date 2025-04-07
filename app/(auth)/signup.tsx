import React, { useState } from "react";
import { View, TextInput, Alert, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import globalStyles from "../../styles/globalStyles";
import { useCredentials } from "@/hooks/useCredentials";

export default function SignupScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const theme = useTheme(); // Get dynamic theme colors
  const { saveCredentials } = useCredentials();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      saveCredentials({ username, password });
      Alert.alert("Success", "Account created successfully!");
      router.replace("/(tabs)"); // Redirect to Home after successful signup
    } catch (error) {
      Alert.alert("Error", "Failed to save credentials.");
    }
  };

  const style = {
    btn: {
      color: theme.colors.primary,
      borderBottomColor: theme.colors.primary,
      marginTop: 20,
    },
  };

  return (
    <View
      style={[
        [globalStyles.container, { backgroundColor: theme.colors.background }],
      ]}
    >
      <Text style={[globalStyles.h1]}>
        Create Account
      </Text>
      <TextInput
        placeholder="Username or Email"
        placeholderTextColor={theme.colors.primary}
        value={username}
        onChangeText={setUsername}
        style={[globalStyles.input, style.btn]}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.colors.primary}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={[globalStyles.input, style.btn]}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor={theme.colors.primary}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={[globalStyles.input, style.btn]}
      />
      <Button
        mode="contained"
        icon="account-plus"
        style={[globalStyles.button]}
        onPress={handleSignup}
      >
        Sign Up
      </Button>
      <View
        style={{
          marginTop: 18,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text>
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={{ color: theme.colors.primary }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
