import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Text, Button } from "react-native-paper";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Message Sent:", { name, email, message });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant="headlineLarge">Contact Us</Text>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={{ borderBottomWidth: 1, marginTop: 10 }}
      />
      <TextInput
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginTop: 10 }}
      />
      <TextInput
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={6}
        style={{
          borderWidth: 1,
          marginTop: 10,
          padding: 10,
          textAlignVertical: "top", // Ensures text starts at the top
          height: 100, // Adjust height to match 4 lines
        }}
      />
      <Button mode="contained" style={{ marginTop: 20 }} onPress={handleSubmit}>
        Send Message
      </Button>
    </View>
  );
}
