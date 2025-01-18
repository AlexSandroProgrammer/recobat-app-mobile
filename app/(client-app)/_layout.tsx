import LogoutIconButton from "@/presentation/auth/components/LogoutIconButton";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";

import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import useClient from "@/presentation/client/hooks/useClient";
import { Redirect, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import IsLoadingRefresh from "../../presentation/theme/components/IsLoadingRefresh";

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();
  const backgroundColor = useThemeColor({}, "background");
  const primaryColor = useThemeColor({}, "primary");

  // const [jwt, setJwt] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   checkStatus();
  // }, [checkStatus]);

  // useEffect(() => {
  //   const fetchJwt = async () => {
  //     try {
  //       const token = await SecureStorageAdapter.getItem("jwt");
  //       setJwt(token || null);
  //     } catch (error) {
  //       console.error("Error al obtener el token:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchJwt();
  // }, []);

  // if (status === "checking") {
  //   return <IsLoadingRefresh />;
  // }

  // if (status === "unauthenticated") {
  //   return <Redirect href="/auth/login" />;
  // }

  // const { userQuery } = useClient(jwt || "");

  // if (userQuery.isLoading) {
  //   return <IsLoadingRefresh />;
  // }

  // const user = userQuery.data!;
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: primaryColor,
        },
        headerTintColor: backgroundColor,
        contentStyle: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: `RecobatApp`,
          headerRight: () => <LogoutIconButton />,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default CheckAuthenticationLayout;
