import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { Tabs, useRouter } from "expo-router";
import { useCredentials } from "@/hooks/useCredentials";

export default function TabsLayout() {
  const router = useRouter();
  const theme = useTheme();
  const { credentials, clearCredentials } = useCredentials();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        title: "🪡Afghan Tailor",
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.onSurface,
        tabBarActiveTintColor: theme.colors.primary, // Set active icon color
        // tabBarInactiveTintColor: theme.colors.placeholder, // Set inactive icon color
        tabBarStyle: {
          backgroundColor: theme.colors.surface, // Slightly different from the background for distinction
          // borderTopWidth: 2,
          borderTopColor: theme.colors.primary, // Active tab border color
          height: 70, // Increased height for better spacing
          paddingBottom: 10, // Space the icons away from the bar's bottom edge
          shadowColor: "#000", // Shadow effect for elevation
          shadowOffset: { width: 0, height: -3 }, // Offset the shadow for more depth
          shadowOpacity: 0.2, // Soft shadow opacity
          shadowRadius: 6, // Shadow radius
        },
        tabBarIconStyle: {
          marginTop: 5, // Give a little top margin to the icons for better positioning
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={async () => {
              if (credentials?.login) {
                await clearCredentials(); // Log out
                router.replace("/(auth)/login"); // Redirect to login page after clearing credentials
              } else {
                router.push("/(auth)/login"); // Go to login if the user is not logged in
              }
            }}
          >
            <MaterialIcons
              name={credentials?.login ? "logout" : "person-add"}
              size={24}
              color={theme.colors.onSurface}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              color={color}
              size={size}
              style={{
                transform: [{ scale: color === theme.colors.primary ? 1.1 : .9 }],
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: "About Us",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="info"
              color={color}
              size={size}
              style={{
                transform: [{ scale: color === theme.colors.primary ? 1.1 : .9 }],
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="search"
              color={color}
              size={size}
              style={{
                transform: [{ scale: color === theme.colors.primary ? 1.1 : .9 }],
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="contact-mail"
              color={color}
              size={size}
              style={{
                transform: [{ scale: color === theme.colors.primary ? 1.1 : .9 }],
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
