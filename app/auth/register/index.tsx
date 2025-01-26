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

const RegisterScreen = () => {
  const { register } = useAuthStore();
  const { height } = useWindowDimensions();

  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const onRegister = async () => {
    const { email, username, password } = form;

    console.log({ email, username, password });

    if (email.length === 0 || username.length === 0 || password.length === 0) {
      // showSnackbar("Por favor ingresa todos los datos.");
      Alert.alert(
        "Opsss!",
        "Faltan datos por ingresar, por favor verifica los datos."
      );
      return;
    }

    setIsPosting(true);
    const authSuccess = await register(username, email, password);
    setIsPosting(false);

    if (authSuccess) {
      router.replace("/");
      return;
    }

    Alert.alert("Error", "Error al momento de registrar los datos");
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
              <Text className="text-primary-300">Registrarme</Text>
            </Text>
            <Text className="text-base text-center font-kanit text-black-200">
              Por favor Ingresa los siguientes datos para continuar con tu
              registro.
            </Text>

            <ThemedTextInput
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              // evitamos que tenga espacios
              maxLength={30}
              onChangeText={(value) =>
                setForm({ ...form, email: value.replace(/\s/g, "") })
              }
              iconRef="mail-outline"
            />

            <ThemedTextInput
              placeholder="Nombre Usuario"
              keyboardType="ascii-capable"
              autoCapitalize="none"
              value={form.username}
              iconRef="person-outline"
              // evitamos que tenga espacios
              maxLength={30}
              onChangeText={(value) =>
                setForm({ ...form, username: value.replace(/\s/g, "") })
              }
            />

            <ThemedTextInput
              placeholder="Ingresa tu contraseña"
              secureTextEntry
              autoCapitalize="none"
              value={form.password}
              iconRef="lock-closed-outline"
              maxLength={20}
              onChangeText={(value) =>
                setForm({ ...form, password: value.replace(/\s/g, "") })
              }
            />

            <TouchableOpacity
              onPress={onRegister}
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
                  Registrarme
                </Text>
              </View>
            </TouchableOpacity>

            <ButtonAuthGoogle />
            <Text className="text-base font-kanit-bold text-black-300 text-center mt-1">
              ¿Ya tienes cuenta? {"\n"}
              <Link href="/auth/login/signin" className="text-primary-300">
                Iniciar Sesion
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
