import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import ThemedSelectCrop from "@/presentation/components/theme/ThemedSelectCrop";
import ThemedDatePicker from "@/presentation/components/theme/ThemedDatePicker";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { InitialCropFormProps } from "@/core/transitional-crop/interfaces/index.interface";
import { useTypeCrop } from "../hooks/useTypeCrop";
import { SelectItem } from "@/core/theme/index.interface";
import AlertModal from "@/presentation/components/theme/AlertModal";

const FormVerificationCrop: React.FC<InitialCropFormProps> = ({
  id,
  cropOptions,
  farmPlot,
}) => {
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);

  // Estado del formulario, incluyendo el campo "fecha"
  const [form, setForm] = useState({
    nameFarm: farmPlot?.farm?.nameFarm || "",
    namePlot: farmPlot?.namePlot || "",
    PlotId: farmPlot?.id,
    crop_transitional: "",
    id_crop_type: "",
    altitude: farmPlot?.farm?.altitude || "",
    altitudeCropType: farmPlot?.farm?.altitude || "",
    initDate: "", // Campo para almacenar la fecha
  });

  // Estado y lógica para el selector de cultivo
  const { cropTypesQuery } = useTypeCrop(form.crop_transitional);
  if (cropTypesQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  const cropTypes = cropTypesQuery.data?.crop_types;

  const filteredCrop = cropTypes?.map((crop) => ({
    label: crop.nameCrop,
    value: crop.documentId,
    altitudeCropType: crop.altitude,
  }));

  const cropOptionsFiltered: SelectItem[] = filteredCrop || [];

  // Función para continuar con el proceso luego de confirmar en la alerta
  const continueProcess = async () => {
    setShowAlert(false);
    setIsPosting(true);
    // Aquí se agrega la lógica para continuar con el registro
    console.log("Continuamos con el proceso de registro", { form });
    setIsPosting(false);
  };

  // Función para cancelar el proceso (cerrar la alerta sin continuar)
  const cancelProcess = () => {
    setShowAlert(false);
  };

  // Función para enviar o registrar el lote
  const registerGeneralProccess = async () => {
    const { PlotId, id_crop_type, altitude, initDate, altitudeCropType } = form;

    // Verificamos que todos los campos obligatorios estén completos
    if (
      !PlotId ||
      !id_crop_type ||
      !initDate ||
      !altitude ||
      !altitudeCropType
    ) {
      Alert.alert(
        "¡Faltan Datos!",
        "Todos los campos son obligatorios, por favor ingresa todos los datos.",
        [{ text: "Aceptar" }],
        { cancelable: false }
      );
      return;
    }

    // Validamos si la altitud del lote es diferente a la del cultivo
    if (altitudeCropType !== altitude) {
      // Se muestra la alerta modal para preguntar si se continúa
      setShowAlert(true);
      return;
    }

    setIsPosting(true);
    // Aquí se agregaría la lógica para consultar el cultivo o registrar el lote
    console.log("Registro completado", { form });
    setIsPosting(false);
  };

  return (
    <View className="flex-auto justify-center px-5">
      {/* Alerta Modal para confirmar continuar el proceso si la altitud difiere */}
      <AlertModal
        visible={showAlert}
        title="¡Presta Atención!"
        message="La altitud del lote no coincide con la del cultivo, si aceptas continuar tu margen de ganancia sera muy baja, en algunos casos solo tendras perdidas, ¿Deseas continuar de todas formas?"
        onConfirm={continueProcess}
        onCancel={cancelProcess}
        confirmText="Confirmar Proceso"
        cancelText="No quiero perder!"
      />
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

      {/* Campos de texto inhabilitados */}
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
        onValueChange={(item) => {
          const selectedCrop = cropOptions.find(
            (option) => option.value.toString() === item.value.toString()
          );
          setForm((prev) => ({
            ...prev,
            crop_transitional: item.value.toString(),
            altitudeCropType: selectedCrop?.altitudeCropType || "",
          }));
        }}
        iconRef="leaf-outline"
      />

      {cropTypes && cropTypes.length === 0 ? (
        <View className="mt-4 w-full">
          <Text className="text-lg text-left font-kanit text-red-500">
            Por favor seleccionar un tipo de cultivo...
          </Text>
        </View>
      ) : (
        <ThemedSelectCrop
          placeholder="Seleccionar Variacion de Cultivo"
          data={cropOptionsFiltered}
          selectedValue={cropOptionsFiltered?.find(
            (option) => option.value.toString() === form.id_crop_type
          )}
          onValueChange={(item) => {
            const selectedCropType = cropOptionsFiltered.find(
              (option) => option.value.toString() === item.value.toString()
            );
            setForm((prev) => ({
              ...prev,
              id_crop_type: item.value.toString(),
              altitudeCropType: selectedCropType?.altitudeCropType || "",
            }));
          }}
          iconRef="leaf-outline"
        />
      )}

      {/* Componente reutilizable para seleccionar la fecha */}
      <ThemedDatePicker
        iconRef="calendar-number-outline"
        placeholder="Seleccionar Fecha de Inicio"
        value={form.initDate}
        onChange={(selectedDate) =>
          setForm((prev) => ({ ...prev, initDate: selectedDate }))
        }
      />

      {/* Botón para finalizar el registro */}
      <TouchableOpacity
        onPress={registerGeneralProccess}
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
