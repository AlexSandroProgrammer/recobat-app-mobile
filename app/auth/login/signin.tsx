import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

import icons from "@/constants/icons";
import images from "@/constants/images";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Link, router } from "expo-router";
import ButtonAuthGoogle from "@/presentation/components/theme/ButtonAuthGoogle";

const LoginScreen = () => {
  const { login } = useAuthStore();

  const { height } = useWindowDimensions();

  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    const { email, password } = form;

    console.log({ email, password });

    if (email.length === 0 || password.length === 0) {
      // showSnackbar("Por favor ingresa todos los datos.");
      Alert.alert(
        "Opsss!",
        "Faltan Datos por ingresar, por favor verifica los datos."
      );

      return;
    }

    setIsPosting(true);
    const authSuccess = await login(email, password);
    setIsPosting(false);

    if (authSuccess) {
      router.replace("/");
      return;
    }

    Alert.alert("Error", "Usuario o contraseña no son correctos");
    // showSnackbar("Usuario o contraseña no son correctos.");
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
              Por favor Ingresa tus credenciales de email y contraseña.
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
              </View>
            </TouchableOpacity>

            <ButtonAuthGoogle />

            <Text className="text-base font-kanit-bold text-black-300 text-center mt-3">
              ¿No tienes cuenta? {"\n"}
              <Link href="/auth/register" className="text-primary-300">
                Registrarme
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
