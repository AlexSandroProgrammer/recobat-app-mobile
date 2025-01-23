// components/AppTabs.tsx
import React from "react";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import icons from "@/constants/icons"; // Asegúrate de que los íconos sean accesibles

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View style={{ alignItems: "center", marginTop: 5 }}>
    <Image
      source={icon}
      style={{ width: 24, height: 24, tintColor: focused ? "#0061FF" : "#666" }}
    />
    <Text style={{ fontSize: 12, color: focused ? "#0061FF" : "#666" }}>
      {title}
    </Text>
  </View>
);

const AppTabs = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#ddd",
          borderTopWidth: 1,
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore/index"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppTabs;
