import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect, Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, [checkStatus]);

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
        <ActivityIndicator size="large" color="#4880e9" />
      </View>
    );
  }

  if (status === "unauthenticated") {
    return <Redirect href="/auth/login" />;
  }
  return (
    // <Stack
    //   screenOptions={{
    //     headerShadowVisible: false,
    //   }}
    // >
    //   <Stack.Screen
    //     name="(home)/index"
    //     options={{
    //       title: `Bienvenido Usuario`,
    //     }}
    //   ></Stack.Screen>
    // </Stack>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default CheckAuthenticationLayout;
