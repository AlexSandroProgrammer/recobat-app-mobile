import LogoutIconButton from "@/presentation/auth/components/LogoutIconButton";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";

import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import useClient from "@/presentation/client/hooks/useClient";
import { Redirect, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { UserData } from "../../core/interfaces/index.interface";
import IsLoadingRefresh from "../../presentation/theme/components/IsLoadingRefresh";

const CheckAuthenticationLayout = () => {
  // Estado para almacenar los datos del usuario autenticado
  const { status, checkStatus } = useAuthStore();
  const backgroundColor = useThemeColor({}, "background");

  // Estado para manejar el token y el estado de carga
  const [jwt, setJwt] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    // Obtener el token de forma asíncrona
    const fetchJwt = async () => {
      try {
        const token = await SecureStorageAdapter.getItem("jwt");
        if (token) {
          setJwt(token);
        } else {
          console.warn("Token no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el token:", error);
      } finally {
        setIsLoading(false); // Detener el estado de carga
      }
    };
    fetchJwt();
  }, []);

  if (status === "checking") {
    return <IsLoadingRefresh />;
  }
  if (status === "unauthenticated") {
    return <Redirect href="/auth/login" />;
  }

  const { userQuery } = useClient(`${jwt}`);

  if (userQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  const user = userQuery.data!;
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
          title: `Bienvenido ${user?.username}`,
          headerRight: () => <LogoutIconButton />,
        }}
        //* pasamos la data para tenerla de manera general
      ></Stack.Screen>
    </Stack>
  );
};

export default CheckAuthenticationLayout;
