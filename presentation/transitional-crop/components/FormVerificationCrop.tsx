import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import ThemedSelectCrop from "@/presentation/components/theme/ThemedSelectCrop";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { SelectItem } from "@/core/theme/index.interface";
import { DataFarmForPlot } from "@/core/transitional-crop/interfaces/index.interface";
import { useTypeCrop } from "../hooks/useTypeCrop";

// Interfaz para las props del formulario
export interface InitialCropFormProps {
  id: string;
  cropOptions: SelectItem[];
  farmPlot: DataFarmForPlot;
}

const FormVerificationCrop: React.FC<InitialCropFormProps> = ({
  id,
  cropOptions,
  farmPlot,
}) => {
  const [isPosting, setIsPosting] = useState<boolean>(false);

  // Estado del formulario, con valores iniciales provenientes de farmPlot
  const [form, setForm] = useState({
    nameFarm: farmPlot?.farm?.nameFarm || "",
    namePlot: farmPlot?.namePlot || "",
    size: "",
    PlotId: id,
    crop_transitional: "", // Aquí se guardará el id del cultivo seleccionado
  });

  /**
   * Llamamos al hook para obtener la data del cultivo seleccionado.
   * El hook se dispara solo cuando `form.crop_transitional` tiene un valor (configurado en la opción `enabled` dentro del hook).
   */
  const { cropTypesQuery } = useTypeCrop(form.crop_transitional);

  const cropTypes = cropTypesQuery?.data;

  // Función para enviar o registrar el lote
  const registerPlot = async () => {
    setIsPosting(true);
    try {
      console.log("datos enviados", form);
      // Aquí implementar la lógica para registrar el lote, por ejemplo:
      // await mutation.mutateAsync(form);
    } catch (error) {
      console.error("Error registrando el lote", error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <View className="flex-auto justify-center items-center px-5">
      {/* Título y descripción */}
      <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
        <Text className="text-primary-300 text-left">
          Formulario Verificación del Cultivo
        </Text>
      </Text>
      <Text className="text-base text-left font-kanit text-black-200 mt-2">
        Por favor ingresa los siguientes datos para validar si el terreno es
        apto para el cultivo que deseas cosechar.
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

      {/* Sección para mostrar la data del cultivo obtenida mediante el hook */}
      {form.crop_transitional && (
        <View className="mt-4 w-full">
          {cropTypesQuery.isLoading ? (
            <IsLoadingRefresh />
          ) : cropTypesQuery.isError ? (
            <Text className="text-red-500 font-kanit">
              Error al obtener los datos del cultivo.
            </Text>
          ) : cropTypesQuery ? (
            <View>
              {/* Ejemplo de despliegue de la data */}
              <Text className="text-base text-black">
                {`Nombre del Cultivo: ${cropTypesQuery.data}`}
              </Text>
              {/* Puedes agregar aquí otros campos de cropData */}
            </View>
          ) : (
            <Text className="text-base text-black ">
              No hay datos para el cultivo seleccionado.
            </Text>
          )}
        </View>
      )}

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
