import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
const UpdateFarmScreen = () => {
  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    document: "",
  });
  return (
    <Animated.View
      entering={FadeIn}
      className="flex-auto content-center items-center bg-[#00000025] justify-center"
    >
      {/* Dismiss modal when pressing outside */}
      <Link href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        className="w-[90%] h-[80%] rounded-lg items-center justify-center bg-slate-50 mb-20"
      >
        <View className="px-10 w-[90%] mt-5">
          <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
            <Text className="text-primary-300">Completar Mis Datos</Text>
          </Text>
          <Text className="text-base text-center font-kanit text-black-200">
            Por favor ingresa los siguientes datos para terminar tu proceso de
            registro.
          </Text>

          <ThemedTextInput
            placeholder="Numero de documento"
            keyboardType="numeric"
            autoCapitalize="none"
            value={form.document}
            iconRef="card-outline"
            maxLength={12}
            onChangeText={(value) =>
              setForm({ ...form, document: value.replace(/\s/g, "") })
            }
          />

          <TouchableOpacity
            onPress={() => console.log("")}
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
                Finalizar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Link href="/">
          <Text>← Go back</Text>
        </Link>
      </Animated.View>
    </Animated.View>
  );
};

export default UpdateFarmScreen;
