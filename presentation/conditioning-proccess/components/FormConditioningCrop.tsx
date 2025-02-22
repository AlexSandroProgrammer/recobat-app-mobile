import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import icons from "@/constants/icons";
import AlertModal from "@/presentation/components/theme/AlertModal";
import AlertModalSuccess from "@/presentation/components/theme/AlertModalSuccess";
import ThemedDatePicker from "@/presentation/components/theme/ThemedDatePicker";
import { Ionicons } from "@expo/vector-icons";
import ThemedSelectCrop from "@/presentation/components/theme/ThemedSelectCrop";

const FormConditioningCrop = ({}) => {
  //* llamar al hook del store para el registro
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);

  // Estado del formulario, incluyendo el campo "fecha"
  const [form, setForm] = useState({
    init_date: "",
  });

  const returnHome = () => {
    router.replace("/");
  };

  // Función para continuar con el proceso luego de confirmar en la alerta
  const continueProcess = async () => {
    // setShowAlert(false);
    // const {
    //   PlotId: plot,
    //   id_crop_type: crop_type,
    //   init_date,
    //   documentId,
    // } = form;
    // setIsPosting(true);
    // const registerGeneral = await registerGeneralInstance(
    //   plot,
    //   crop_type,
    //   documentId,
    //   init_date
    // );
    // setIsPosting(false);
    // if (registerGeneral) {
    //   setShowAlertSuccess(true);
    //   return;
    // }
    // Alert.alert("Lo sentimos!", "No se pudo completar el registro.");
  };

  // Función para cancelar el proceso (cerrar la alerta sin continuar)
  const cancelProcess = () => {
    setShowAlert(false);
  };

  // Función para enviar o registrar el lote
  const registerGeneralProccess = async () => {
    // const { PlotId, id_crop_type, altitude, init_date, altitudeCropType } =
    //   form;
    // // Verificamos que todos los campos obligatorios estén completos
    // if (
    //   !PlotId ||
    //   !id_crop_type ||
    //   !init_date ||
    //   !altitude ||
    //   !altitudeCropType
    // ) {
    //   Alert.alert(
    //     "¡Faltan Datos!",
    //     "Todos los campos son obligatorios, por favor ingresa todos los datos.",
    //     [{ text: "Aceptar" }],
    //     { cancelable: false }
    //   );
    //   return;
    // }
    // // Validamos si la altitud del lote es diferente a la del cultivo
    // if (altitudeCropType !== altitude) {
    //   // Se muestra la alerta modal para preguntar si se continúa
    //   setShowAlert(true);
    //   return;
    // }
    // setIsPosting(true);
    // // Aquí se agregaría la lógica para consultar el cultivo o registrar el lote
    // console.log("Registro completado", { form });
    // setIsPosting(false);
  };

  return (
    <View className="flex-auto justify-center content-center px-5">
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

      <AlertModalSuccess
        visible={showAlertSuccess}
        title="Felicidades"
        message="Haz logrado finalizar el proceso de verificacion del cultivo para una parcela, ahora te invitamos a realizar cada uno de los procesos para finalizar con la cosecha del cultivo en tu parcela."
        onConfirm={returnHome}
        confirmText="Iniciar ya!"
      />
      {/* Título y descripción */}
      <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-5">
        <Text className="text-primary-300 text-center">
          Formulario Verificación del Cultivo
        </Text>
      </Text>
      <Text className="text-base text-left font-kanit text-black-200 mt-2">
        Por favor ingresa los siguientes datos para programar el
        acondicionamiento de cultivo de tu colaborador.
      </Text>

      {/* <ThemedTextInput
        placeholder="Nombre de la finca"
        editable={false}
        value={form.nameFarm}
        iconRef="home-outline"
        onChangeText={(value) =>
          setForm((prev) => ({ ...prev, nameFarm: value }))
        }
      /> */}

      {/* <ThemedSelectCrop
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
      /> */}

      {/* {cropTypes && cropTypes.length === 0 ? (
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
      )} */}

      <ThemedDatePicker
        iconRef="calendar-number-outline"
        placeholder="Seleccionar fecha de inicio"
        value={form.init_date}
        onChange={(selectedDate) =>
          setForm((prev) => ({ ...prev, init_date: selectedDate }))
        }
      />

      {/* Botón para finalizar el registro */}
      <TouchableOpacity
        onPress={registerGeneralProccess}
        disabled={isPosting}
        className="bg-green-500 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
      >
        <View className="flex flex-row items-center justify-center">
          {isPosting ? (
            <ActivityIndicator size={26} color="#ffff" />
          ) : (
            <>
              <Text className="text-lg font-kanit text-white ml-2">
                Agregar
              </Text>
              <Ionicons name="add-circle-outline" size={25} color="white" />
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

export default FormConditioningCrop;
