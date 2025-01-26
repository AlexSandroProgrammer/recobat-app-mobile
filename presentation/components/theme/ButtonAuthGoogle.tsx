import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";

const ButtonAuthGoogle = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log("Iniciar Sesion")}
      className="bg-primary-400 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-2"
    >
      <View className="flex flex-row items-center justify-center">
        <Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
        <Text className="text-lg font-kanit text-white ml-2">
          Continuar con Google
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAuthGoogle;
