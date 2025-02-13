import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import ThemedSelectCrop from "@/presentation/components/theme/ThemedSelectCrop";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { InitialCropFormProps } from "@/core/transitional-crop/interfaces/index.interface";
import { useTypeCrop } from "../hooks/useTypeCrop";
import { SelectItem } from "@/core/theme/index.interface";

const FormVerificationCrop: React.FC<InitialCropFormProps> = ({
  id,
  cropOptions,
  farmPlot,
}) => {
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const { altitude } = farmPlot?.farm;

  // Estado del formulario, con valores iniciales provenientes de farmPlot
  const [form, setForm] = useState({
    nameFarm: farmPlot?.farm?.nameFarm || "",
    namePlot: farmPlot?.namePlot || "",
    size: "",
    PlotId: id,
    crop_transitional: "",
    crop_type: "",
  });

  /**
   * Llamamos al hook para obtener la data del cultivo seleccionado.
   * El hook se dispara solo cuando `form.crop_transitional` tiene un valor (configurado en la opción `enabled` dentro del hook).
   */
  const { cropTypesQuery } = useTypeCrop(form.crop_transitional);

  if (cropTypesQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  const plot = cropTypesQuery?.data;
  const cropTypes = cropTypesQuery.data?.crop_types;

  if (!plot) {
    Alert.alert(
      "No se encontraron tipos cultivos",
      "Por favor seleccionar otro tipo de cultivo"
    );
  }

  // Mapeamos los datos para obtener solo el id y el nombre del cultivo
  const filteredCrop = cropTypes?.map((crop) => ({
    label: crop.nameCrop,
    value: crop.id,
  }));

  const cropOptionsFiltered: SelectItem[] = filteredCrop || [];

  // Función para enviar o registrar el lote
  const registerPlot = async () => {
    setIsPosting(true);
    try {
      console.log("datos enviados", form);
    } catch (error) {
      console.error("Error registrando el lote", error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <View className="flex-auto justify-center px-5">
      {/* Título y descripción */}
      <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
        <Text className="text-primary-300 text-center">
          Formulario Verificación del Cultivo
        </Text>
      </Text>
      <Text className="text-base text-left font-kanit text-black-200 mt-2">
        Por favor ingresa los siguientes datos para validar si la parcela es
        apta para el cultivo que deseas cosechar.
      </Text>

      {/* Campos de texto inhabilitados (solo visualización) */}
      <ThemedTextInput
        placeholder="Nombre de la finca"
        editable={false}
        value={form.nameFarm}
        iconRef="home-outline"
        onChangeText={(value) =>
          setForm((prev) => ({ ...prev, nameFarm: value }))
        }
      />

      <ThemedTextInput
        placeholder="Nombre del lote"
        editable={false}
        value={form.namePlot}
        iconRef="leaf-outline"
        onChangeText={(value) =>
          setForm((prev) => ({ ...prev, namePlot: value }))
        }
      />

      {/* Selector de cultivo */}
      <ThemedSelectCrop
        placeholder="Seleccionar Tipo de Cultivo"
        data={cropOptions}
        selectedValue={cropOptions.find(
          (option) => option.value.toString() === form.crop_transitional
        )}
        onValueChange={(item) =>
          setForm((prev) => ({
            ...prev,
            crop_transitional: item.value.toString(),
          }))
        }
        iconRef="leaf-outline"
      />

      {
        // verificamos si el arreglo de tipos de cultivo viene vacio
        cropTypes && cropTypes.length === 0 ? (
          <View className="mt-4 w-full">
            <Text className="text-md text-left font-kanit text-red-500">
              Por favor seleccionar un tipo de cultivo...
            </Text>
          </View>
        ) : (
          <ThemedSelectCrop
            placeholder="Seleccionar Variacion de Cultivo"
            data={cropOptionsFiltered}
            selectedValue={filteredCrop?.find(
              (option) => option.value.toString() === form.crop_type
            )}
            onValueChange={(item) =>
              setForm((prev) => ({
                ...prev,
                crop_type: item.value.toString(),
              }))
            }
            iconRef="leaf-outline"
          />
        )
      }

      {/* Botón para finalizar el registro */}
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

      {/* Botón para regresar */}
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
