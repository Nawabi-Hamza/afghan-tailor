import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Button, useTheme } from "react-native-paper";
import { useCredentials } from "@/hooks/useCredentials";
import globalStyles from "../../styles/globalStyles";

export default function HomeScreen() {
  const router = useRouter();
  const theme = useTheme(); // Access theme for dynamic colors
  const { credentials } = useCredentials();

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources
  const images = [
    require("../../assets/images/pages/home1.jpg"),
    require("../../assets/images/pages/home2.jpg"),
    require("../../assets/images/pages/home3.jpg"),
    require("../../assets/images/pages/home4.jpg"),
  ];

  // Function to handle next image
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first image
    }
  };

  // Function to handle previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1); // Loop back to the last image
    }
  };

  // Auto navigate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  return (
    <View
      style={[
        globalStyles.container,
        {
          backgroundColor: theme.colors.background,
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 20,
        },
      ]}
    >
      <Text style={{ marginBottom: 10, fontSize: 24, color: theme.colors.onSurface }}>
        Welcome {credentials.username} 👋🏻,
      </Text>

      {/* Image Slider */}
      <View style={styles.imageSlider}>
        <TouchableOpacity onPress={prevImage} style={styles.arrowButtonLeft}>
          <Text style={[styles.arrowText, { color: theme.colors.onSurface }]}>{"<"}</Text>
        </TouchableOpacity>

        <Image
          source={images[currentIndex]}
          style={styles.image}
        />

        <TouchableOpacity onPress={nextImage} style={styles.arrowButtonRight}>
          <Text style={[styles.arrowText, { color: theme.colors.onSurface }]}>{">"}</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: theme.colors.onSurface }}>- Username: {credentials.username}</Text>
      <Text style={{ color: theme.colors.onSurface }}>- Password: {credentials.password}</Text>

      <View style={[globalStyles.spaceBetween, { width: "100%", flexDirection: "row", marginTop: 20 }]}>
        <Button
          mode="contained-tonal"
          onPress={() => router.push("/contact")}
        >
          Contact
        </Button>
        <Button
          mode="contained"
          onPress={() => router.push("/about")}
          labelStyle={{ color: theme.colors.background }}
        >
          About
        </Button>
        <Button
          mode="contained-tonal"
          onPress={() => router.push("/(auth)/login")}
        >
          Signout
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageSlider: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  arrowButtonLeft: {
    position: "absolute",
    top: "50%",
    left: 5,
    transform: [{ translateY: -20 }],
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    zIndex: 1,
  },
  arrowButtonRight: {
    position: "absolute",
    top: "50%",
    right: 5,
    transform: [{ translateY: -20 }],
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    zIndex: 1,
  },
  arrowText: {
    fontSize: 24,
  },
});
