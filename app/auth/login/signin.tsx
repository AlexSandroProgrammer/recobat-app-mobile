import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import ButtonAuthGoogle from "@/presentation/components/theme/ButtonAuthGoogle";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { Link, router } from "expo-router";
import SnackBarNotificationDanger from "@/presentation/components/notifications/SnackBarNotificationDanger";
import { ActivityIndicator } from "react-native-paper";

const LoginScreen = () => {
  const { login } = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Estado para el Snackbar
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "",
  });

  // Muestra o oculta el Snackbar
  const showSnackbar = (message: string) => {
    setSnackbar({ visible: true, message });
  };
  const hideSnackbar = () => {
    setSnackbar({ visible: false, message: "" });
  };

  const onLogin = async () => {
    const { email, password } = form;
    if (email.length === 0 || password.length === 0) {
      showSnackbar("Por favor ingresa todos los datos.");
      return;
    }
    setIsPosting(true);
    const authSuccess = await login(email, password);
    setIsPosting(false);
    if (authSuccess) {
      router.replace("/");
      return;
    }
    showSnackbar("Usuario o contraseña no son correctos.");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="justify-center h-full">
          <Image
            source={images.logo}
            className="w-full h-24"
            resizeMode="contain"
          />
          <View className="px-10 mt-5">
            <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
              <Text className="text-primary-300">Iniciar Sesion</Text>
            </Text>
            <Text className="text-base text-center font-kanit text-black-200">
              Por favor Ingresa tus credenciales.
            </Text>

            <ThemedTextInput
              placeholder="Correo electrónico o Usuario"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              maxLength={30}
              iconRef="mail-outline"
              onChangeText={(value) =>
                setForm({ ...form, email: value.replace(/\s/g, "") })
              }
            />

            <ThemedTextInput
              placeholder="Ingresa tu contraseña"
              secureTextEntry
              autoCapitalize="none"
              value={form.password}
              maxLength={20}
              iconRef="lock-closed-outline"
              onChangeText={(value) =>
                setForm({ ...form, password: value.replace(/\s/g, "") })
              }
            />

            <TouchableOpacity
              onPress={onLogin}
              disabled={isPosting}
              className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
            >
              <View className="flex flex-row items-center justify-center">
                {isPosting ? (
                  <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                  <>
                    <Image
                      source={icons.send}
                      className="w-5 h-5"
                      resizeMode="contain"
                      // le cambiamos el color a blanco
                      style={{ tintColor: "white" }}
                    />
                    <Text className="text-lg font-kanit text-white ml-2">
                      Iniciar Sesion
                    </Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
            {isPosting ? (
              <Text className="text-base font-kanit-bold text-primary-400 text-center mt-3">
                Espera un momento...
              </Text>
            ) : (
              <>
                <ButtonAuthGoogle />
                <Text className="text-base font-kanit-bold text-black-300 text-center mt-3">
                  ¿No tienes cuenta? {"\n"}
                  <Link href="/auth/register" className="text-primary-300">
                    Registrarme
                  </Link>
                </Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
      {/* Snackbar */}
      <SnackBarNotificationDanger
        visible={snackbar.visible}
        onDismiss={hideSnackbar}
        message={snackbar.message}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
