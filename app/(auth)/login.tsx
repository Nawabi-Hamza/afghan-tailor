import React, { useState } from "react";
import { View, TextInput, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import globalStyles from "../../styles/globalStyles";
import { useCredentials } from "@/hooks/useCredentials";

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme(); // Get dynamic theme colors
  const { saveCredentials } = useCredentials();

  const handleLogin = async () => {
    if (
      (username === "Hamza" || username === "hamza.nawabi119@gmail.com") &&
      password === "123"
    ) {
      try {
        saveCredentials({ username, password });
        Alert.alert("Success", "Login successful!");
        router.replace("/(tabs)"); // Redirect to Home
      } catch (error) {
        Alert.alert("Storage Error", "Failed to save login data.");
      }
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };
  
  const style = {
    btn: {
      color: theme.colors.primary,
      borderBottomColor: theme.colors.primary,
      marginTop: 20,
    }
  }
  return (
    <View
      style={[
        [globalStyles.container, { backgroundColor: theme.colors.background }],
      ]}
    > 
    
      <Text variant="headlineLarge" style={[globalStyles.h1]}>
        Login
      </Text>
      <TextInput
        placeholder="Username or Email"
        placeholderTextColor={theme.colors.primary}
        value={username}
        onChangeText={setUsername}
        style={[
          globalStyles.input, style.btn

        ]}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.colors.primary}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={[
          globalStyles.input,
          style.btn
        ]}
      />
      <View
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
        <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
          <Text style={{ color: theme.colors.primary }}>Create New Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        icon="lock"
        style={[globalStyles.button]}
        onPress={handleLogin}
      >
        Login
      </Button>
    </View>
  );
}


