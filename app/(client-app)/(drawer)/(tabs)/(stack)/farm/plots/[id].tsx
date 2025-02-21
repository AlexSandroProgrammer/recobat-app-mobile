import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import Layout from "@/presentation/layouts/Layout";
import { usePlotStore } from "@/presentation/plots/hooks/usePlotStore";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const RegisterPlotScreen = () => {
  // obtenemos el id que viene por params
  const { id } = useLocalSearchParams();
  const { plotRegister } = usePlotStore();

  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    namePlot: "",
    size: "",
    farmId: id,
  });

  // funcion para guardar la finca
  const registerPlot = async () => {
    const { namePlot, size, farmId } = form;

    if (namePlot.length === 0 || size.length === 0) {
      Alert.alert("Error", "Por favor ingresa todos los datos del lote.");
      return;
    }

    setIsPosting(true);
    const authSuccess = await plotRegister(
      namePlot,
      size,
      Array.isArray(farmId) ? farmId[0] : farmId
    );
    setIsPosting(false);
    if (authSuccess) {
      // le mostramos una alerta al usuario

      Alert.alert(
        "Todo salió bien!",
        "Los datos han sido registrados correctamente",
        [{ text: "Aceptar", onPress: () => router.push("/") }]
      );
      return;
    }
    Alert.alert("Lo sentimos!", "No se logro completar el registro.");
  };

  return (
    <View className="h-full">
      <View className="flex-auto justify-center content-center items-center px-5">
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
          maxLength={20}
          onChangeText={(value) => setForm({ ...form, namePlot: value })}
        />

        <ThemedTextInput
          placeholder="Medida del Lote en Hectarea"
          keyboardType="numbers-and-punctuation"
          value={form.size}
          iconRef="analytics-outline"
          maxLength={12}
          onChangeText={(value) => setForm({ ...form, size: value })}
        />

        <TouchableOpacity
          onPress={registerPlot}
          disabled={isPosting}
          className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
        >
          <View className="flex flex-row items-center justify-center">
            {isPosting ? (
              <ActivityIndicator size={26} color="#ffff" />
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
                  Finalizar
                </Text>
              </>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/")}
          disabled={isPosting}
          className="bg-red-500 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-2"
        >
          <View className="flex flex-row items-center justify-center">
            {isPosting ? (
              <ActivityIndicator size={26} color="#ffff" />
            ) : (
              <>
                <Image
                  source={icons.backArrow}
                  className="w-5 h-5"
                  resizeMode="contain"
                  // le cambiamos el color a blanco
                  style={{ tintColor: "white" }}
                />
                <Text className="text-lg font-kanit text-white ml-2">
                  Ir al Inicio
                </Text>
              </>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterPlotScreen;
