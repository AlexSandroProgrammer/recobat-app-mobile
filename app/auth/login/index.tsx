import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Redirect } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";

const Auth = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-kanit text-black-200">
            Bienvenido a Recobat
          </Text>

          <Text className="text-3xl font-kanit-bold text-black-300 text-center mt-1">
            Tu mejor asistente {"\n"}
            <Text className="text-primary-300">Para manejar tus cultivos</Text>
          </Text>

          <TouchableOpacity
            onPress={() => console.log("Iniciar Sesion")}
            className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.person}
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

export default Auth;
