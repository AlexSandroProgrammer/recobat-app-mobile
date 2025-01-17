import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect, Stack } from "expo-router";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import LogoutIconButton from "@/presentation/auth/components/LogoutIconButton";
import { useClientStore } from "@/presentation/client/store/useClientStore";
import { UserData } from "../../core/interfaces/index.interface";

const CheckAuthenticationLayout = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor({}, "background");
  // Estado para almacenar los datos del usuario autenticado
  const [userDataNew, setUserDataNew] = useState<UserData | null>(null);
  const { status, checkStatus } = useAuthStore();
  const { userAuthenticated } = useClientStore();

  useEffect(() => {
    checkStatus();
    const dataUser = async () => {
      try {
        const {} = await userAuthenticated();
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    dataUser();
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
        <ActivityIndicator size="large" color={primaryColor} />
      </View>
    );
  }
  if (status === "unauthenticated") {
    return <Redirect href="/auth/login" />;
  }
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        contentStyle: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: `Bienvenido ${userData?.user?.username}`,
          headerRight: () => <LogoutIconButton />,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default CheckAuthenticationLayout;
