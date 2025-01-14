import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect } from "expo-router";

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();
  useEffect(() => {
    checkStatus();
  }, []);

  if (status === "checking") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (status === "unauthenticated") {
    return <Redirect href="/auth/login" />;
  }
  return (
    <View>
      <Text>CheckAuthenticationLayout</Text>
    </View>
  );
};

export default CheckAuthenticationLayout;
