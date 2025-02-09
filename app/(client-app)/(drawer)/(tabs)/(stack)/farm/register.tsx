import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
const RegisterFarmScreen = () => {
  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    nameFarm: "",
    address: "",
    latitude: "",
    altitude: "",
    codeFarm: "",
    telephone: "",
    longitude: "",
    locale: "",
  });
  return (
    <Animated.View
      entering={FadeIn}
      className="flex-auto content-center items-center bg-[#00000025] justify-center"
    >
      <Animated.View
        entering={SlideInDown}
        className="w-[90%] h-[80%] rounded-lg items-center justify-center bg-slate-50 mb-20"
      >
        <Animated.ScrollView>
          <View className="px-5 w-full mt-10">
            <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
              <Text className="text-primary-300">Registrar Finca</Text>
            </Text>
            <Text className="text-base text-left font-kanit text-black-200">
              Por favor ingresa los siguientes datos para registrar tu finca.
            </Text>

            <ThemedTextInput
              placeholder="Nombre de la Finca"
              keyboardType="default"
              autoCapitalize="sentences"
              value={form.nameFarm}
              iconRef="text-outline"
              maxLength={200}
              onChangeText={(value) => setForm({ ...form, nameFarm: value })}
            />

            <ThemedTextInput
              placeholder="Codigo Finca"
              keyboardType="default"
              autoCapitalize="none"
              value={form.codeFarm}
              iconRef="code-sharp"
              maxLength={10}
              onChangeText={(value) => setForm({ ...form, codeFarm: value })}
            />

            <ThemedTextInput
              placeholder="Numero de telefono"
              keyboardType="numeric"
              autoCapitalize="none"
              value={form.telephone}
              iconRef="language-outline"
              maxLength={11}
              onChangeText={(value) => setForm({ ...form, telephone: value })}
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
            <TouchableOpacity
              onPress={() => router.push("/farms")}
              disabled={isPosting}
              className="bg-red-500 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-2"
            >
              <View className="flex flex-row items-center justify-center">
                <Image
                  source={icons.backArrow}
                  className="w-5 h-5"
                  resizeMode="contain"
                  // le cambiamos el color a blanco
                  style={{ tintColor: "white" }}
                />
                <Text className="text-lg font-kanit text-white ml-2">
                  Regresar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.ScrollView>
      </Animated.View>
    </Animated.View>
  );
};

export default RegisterFarmScreen;
