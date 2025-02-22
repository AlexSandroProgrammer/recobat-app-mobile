import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import icons from "@/constants/icons";
import AlertModal from "@/presentation/components/theme/AlertModal";
import AlertModalSuccess from "@/presentation/components/theme/AlertModalSuccess";
import ThemedDatePicker from "@/presentation/components/theme/ThemedDatePicker";
import { Ionicons } from "@expo/vector-icons";
import { InitialConditioningCrops } from "@/core/conditioning/interfaces/index.interface";
import ThemedSelect from "@/presentation/components/theme/ThemedSelect";

const FormConditioningCrop: React.FC<InitialConditioningCrops> = ({
  employeesOptions,
  id,
  conditioningsOptions,
}) => {
  //* llamar al hook del store para el registro
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);

  // Estado del formulario, incluyendo el campo "fecha"
  const [form, setForm] = useState({
    init_date: "",
    employee: "",
    typeConditioningSelect: "",
  });

  const returnHome = () => {
    router.replace("/");
  };

  // Función para continuar con el proceso luego de confirmar en la alerta
  const continueProcess = async () => {};

  // Función para cancelar el proceso (cerrar la alerta sin continuar)
  const cancelProcess = () => {
    setShowAlert(false);
  };

  // Función para enviar o registrar el lote
  const registerGeneralProccess = async () => {};

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
      <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-left ">
        <Text className="text-primary-300">
          Formulario Acondicionamiento del Terreno
        </Text>
      </Text>
      <Text className="text-base font-kanit text-black-200 mt-2">
        Por favor ingresa los siguientes datos para programar el
        acondicionamiento de cultivo de tu colaborador.
      </Text>

      <ThemedSelect
        placeholder="Seleccionar Empleado Para tarea"
        data={employeesOptions}
        selectedValue={employeesOptions.find(
          (option) => option.value === form.employee
        )}
        onValueChange={(item) =>
          setForm((prevState) => ({
            ...prevState,
            employee: item.value.toString(),
          }))
        }
        iconRef="document-text-outline" // Puedes usar el ícono que prefieras
      />

      <ThemedSelect
        placeholder="Seleccionar Tipo de Acondicionamiento"
        data={conditioningsOptions}
        selectedValue={conditioningsOptions.find(
          (option) => option.value === form.typeConditioningSelect
        )}
        onValueChange={(item) =>
          setForm((prevState) => ({
            ...prevState,
            typeConditioningSelect: item.value.toString(),
          }))
        }
        iconRef="document-text-outline" // Puedes usar el ícono que prefieras
      />

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
