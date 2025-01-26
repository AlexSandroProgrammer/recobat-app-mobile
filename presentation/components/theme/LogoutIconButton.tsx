import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../auth/store/useAuthStore";

const LogoutIconButton = () => {
  const dangerColor = "#f44336";
  const { logout } = useAuthStore();
  return (
    <TouchableOpacity style={{ marginRight: 5 }} onPress={logout}>
      <Ionicons name="log-out-outline" size={25} color={dangerColor} />
    </TouchableOpacity>
  );
};

export default LogoutIconButton;
