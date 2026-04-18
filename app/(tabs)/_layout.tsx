import { Tabs } from "expo-router";
import { Platform, useColorScheme } from "react-native";
import { Colors } from "../../hooks/themeColor/Colors";
import { IconApp } from "../../components/IconApp";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 80,
            paddingBottom: 20,
            paddingTop: 8,
          },
          web: {
            height: 55,
            paddingBottom: 0,
            paddingTop: 0,
          },
          default: {
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconApp size={28} name="person-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
