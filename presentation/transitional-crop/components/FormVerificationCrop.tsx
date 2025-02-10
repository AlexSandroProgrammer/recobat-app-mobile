// InitialCropForm.tsx
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { SelectItem } from "@/core/theme/index.interface";
import ThemedSelectCrop from "@/presentation/components/theme/ThemedSelectCrop";

/**
 * Interfaz para las props del formulario.
 */
export interface InitialCropFormProps {
  id: string;
  cropOptions: SelectItem[];
}

const FormVerificationCrop = ({ id, cropOptions }: InitialCropFormProps) => {
  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    namePlot: "",
    size: "",
    PlotId: id,
    crop_transitional: "",
  });

  const registerPlot = async () => {
    console.log("datos enviados", form);
    // Aquí iría la lógica para registrar el lote
  };

  return (
    <View className="flex-auto justify-center items-center px-5">
      <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
        <Text className="text-primary-300 text-left">
          Formulario Verificación del Cultivo
        </Text>
      </Text>
      <Text className="text-base text-left font-kanit text-black-200 mt-2">
        Por favor ingresa los siguientes datos para validar si el terreno es
        apto para el cultivo que deseas cosechar.
      </Text>

      <ThemedSelectCrop
        placeholder="Seleccionar Tipo de Cultivo"
        data={cropOptions}
        selectedValue={cropOptions.find(
          (option) => option.value.toString() === form.crop_transitional
        )}
        onValueChange={(item) =>
          setForm((prevState) => ({
            ...prevState,
            crop_transitional: item.value.toString(),
          }))
        }
        iconRef="leaf-outline" // Puedes usar el ícono que prefieras
      />

      <ThemedTextInput
        placeholder="Nombre del lote"
        keyboardType="default"
        autoCapitalize="sentences"
        value={form.namePlot}
        iconRef="text-outline"
        maxLength={12}
        onChangeText={(value) => setForm({ ...form, namePlot: value })}
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
                style={{ tintColor: "white" }}
              />
              <Text className="text-lg font-kanit text-white ml-2">
                Regresar
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormVerificationCrop;
