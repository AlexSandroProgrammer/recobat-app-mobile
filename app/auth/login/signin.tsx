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
import ThemedTextInput from "@/presentation/components/ThemedTextInput";

const LoginScreen = () => {
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
      return;
    }

    // setIsPosting(true);
    // const authSuccess = await login(email, password);
    // setIsPosting(false);

    // if (authSuccess) {
    //   router.replace("/");
    //   return;
    // }

    // Alert.alert("Error", "Usuario o contraseña no son correctos");
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
        <Image
          source={images.onboarding}
          className="w-full h-3/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-3xl font-kanit-bold text-black-300 text-center mt-1">
            <Text className="text-primary-300">Iniciar Sesion</Text>
          </Text>

          <ThemedTextInput
            placeholder="Correo electrónico o Usuario"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            iconRef="mail-outline"
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <ThemedTextInput
            placeholder="Ingresa tu contraseña"
            secureTextEntry
            autoCapitalize="none"
            value={form.password}
            iconRef="lock-closed-outline"
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <TouchableOpacity
            onPress={() => console.log("")}
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

          <TouchableOpacity
            onPress={() => console.log("Iniciar Sesion")}
            className="bg-primary-400 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-2"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-kanit text-white ml-2">
                Continuar con Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
