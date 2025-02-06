import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

const RegisterPlotScreen = () => {
  const navigation = useNavigation();
  // obtenemos el id que viene por params
  const { id } = useLocalSearchParams();
  console.log(id);

  useEffect(() => {
    // TODO: COLOCAR EL NOMBRE DE LA FINCA
    navigation.setOptions({
      headerRight: () => {
        <Ionicons name="camera-outline" size={30} />;
      },
    });
  }, []);

  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    namePlot: "",
    size: "",
    farm: "",
  });
  return (
    <Animated.View
      entering={FadeIn}
      className="flex-auto content-center items-center bg-[#00000025] justify-center"
    >
      <Animated.View
        entering={SlideInDown}
        className="w-full h-full items-center justify-center bg-slate-50 m-auto"
      >
        <View className="px-5 w-[90%] mt-5">
          <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
            <Text className="text-primary-300">Registro del Lote</Text>
          </Text>
          <Text className="text-base text-center font-kanit text-black-200">
            Por favor ingresa los siguientes datos para registrar el lote de tu
            finca
          </Text>

          <ThemedTextInput
            placeholder="Nombre del lote"
            keyboardType="default"
            autoCapitalize="sentences"
            value={form.namePlot}
            iconRef="text-outline"
            maxLength={12}
            onChangeText={(value) => setForm({ ...form, namePlot: value })}
          />

          <ThemedTextInput
            placeholder="Medida del Lote"
            keyboardType="default"
            autoCapitalize="sentences"
            value={form.size}
            iconRef="analytics-outline"
            maxLength={12}
            onChangeText={(value) => setForm({ ...form, size: value })}
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
            onPress={() => router.push("/")}
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
      </Animated.View>
    </Animated.View>
  );
};

export default RegisterPlotScreen;
