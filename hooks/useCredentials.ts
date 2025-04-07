import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Credentials = {
  username: string;
  password: string;
  login: boolean;
};

export function useCredentials() {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
    login: false,
  });
  
  const loadCredentials = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setCredentials({
          username: parsed.username,
          password: parsed.password,
          login: parsed.login ?? true, // default to true if not set
        });
      }
    } catch (error) {
      console.error("Failed to load credentials:", error);
    }
  };

  useEffect(() => {
    loadCredentials();
  }, []); // Run only once when the component mounts

  // Save Login Credentials
  const saveCredentials = async (newCreds: Omit<Credentials, "login">) => {
    const fullCreds = { ...newCreds, login: true };
    try {
      await AsyncStorage.setItem("user", JSON.stringify(fullCreds));
      setCredentials(fullCreds);
    } catch (error) {
      console.error("Failed to save credentials:", error);
    }
  };

  // Clear Login Credentials
  const clearCredentials = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setCredentials({ username: "", password: "", login: false });
      loadCredentials(); // Reload credentials after clearing
    } catch (error) {
      console.error("Failed to clear credentials:", error);
    }
  };

  return { credentials, saveCredentials, clearCredentials };
}
