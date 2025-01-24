import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../auth/store/useAuthStore";

const LogoutIconButton = () => {
  const dangerColor = "#f44336";
  const { logout } = useAuthStore();
  return (
    <TouchableOpacity style={{ marginRight: 8 }} onPress={logout}>
      <Ionicons name="log-out-outline" size={24} color={dangerColor} />
    </TouchableOpacity>
  );
};

export default LogoutIconButton;
