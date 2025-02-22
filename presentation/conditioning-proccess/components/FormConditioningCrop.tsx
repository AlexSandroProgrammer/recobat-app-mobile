import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import icons from "@/constants/icons";
import ThemedDatePicker from "@/presentation/components/theme/ThemedDatePicker";
import { Ionicons } from "@expo/vector-icons";
import { InitialConditioningCrops } from "@/core/conditioning/interfaces/index.interface";
import ThemedSelect from "@/presentation/components/theme/ThemedSelect";
import LottieView from "lottie-react-native";
import Layout from "@/presentation/layouts/Layout";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { useConditioningStore } from "../hooks/useConditioningStore";
import AlertModalSuccess from "@/presentation/components/theme/AlertModalSuccess";

const FormConditioningCrop: React.FC<InitialConditioningCrops> = ({
  employeesOptions,
  id,
  conditioningsOptions,
}) => {
  //* llamar al hook del store para el registro
  const [isLottieLoaded, setLottieLoaded] = useState(false);
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);

  const { conditioningRegisterProccess } = useConditioningStore();

  // Estado del formulario, incluyendo el campo "fecha"
  const [form, setForm] = useState({
    idProccessAconditioning: id,
    init_date: "",
    employee: "",
    typeConditioningSelect: "",
    salary: "",
  });

  // Función para enviar o registrar el lote
  const registerGeneralProccess = async () => {
    const {
      init_date,
      employee,
      typeConditioningSelect,
      salary,
      idProccessAconditioning,
    } = form;

    if (
      init_date.length === 0 ||
      employee.length === 0 ||
      typeConditioningSelect.length === 0 ||
      salary.length === 0
    ) {
      Alert.alert("Error", "Por favor ingresa todos los datos requeridos.");
      return;
    }

    setIsPosting(true);

    const conditioning = await conditioningRegisterProccess(
      employee,
      salary,
      init_date,
      typeConditioningSelect,
      idProccessAconditioning
    );

    setIsPosting(false);

    if (conditioning) {
      setShowAlertSuccess(true);
      return;
    }
    Alert.alert("Lo sentimos!", "No se pudo completar el registro.");
  };

  const returnHome = () => {
    router.back();
  };

  return (
    <Layout>
      <AlertModalSuccess
        visible={showAlertSuccess}
        title="Felicidades"
        message="Se registro correctamente la programacion de acondicionamiento de tu cultivo, si deseas registrar mas programaciones por favor vuelva rellenar el formulario. "
        onConfirm={returnHome}
        confirmText="Iniciar ya!"
      />
      <View className="flex-auto justify-center content-center px-5">
        <View className="flex flex-row justify-center">
          {/* Contenedor del Lottie con ActivityIndicator */}
          <View className="items-center content-center relative">
            <LottieView
              source={require("@/assets/lottie/truck.json")}
              autoPlay
              loop
              speed={1}
              style={{ width: 120, height: 120 }}
              onLayout={() => setLottieLoaded(true)}
            />
            {!isLottieLoaded && (
              <ActivityIndicator
                size="large"
                color="blue"
                style={{ position: "absolute" }}
              />
            )}
          </View>
        </View>
        {/* Título y descripción */}
        <Text className="text-3xl font-kanit-bold text-green-800 uppercase text-left ">
          Acondicionamiento del Terreno
        </Text>
        <Text className="text-base font-kanit text-black-200 mt-2">
          Por favor ingresa los siguientes datos para programar el
          acondicionamiento del cultivo de tu colaborador.
        </Text>

        <ThemedSelect
          placeholder="Seleccionar Empleado Para Actividad"
          data={employeesOptions}
          selectedValue={employeesOptions.find(
            (option) => option.value.toString() === form.employee
          )}
          onValueChange={(item) =>
            setForm((prevState) => ({
              ...prevState,
              employee: item.value.toString(),
            }))
          }
          iconRef="person-circle-outline" // Puedes usar el ícono que prefieras
        />

        <ThemedSelect
          placeholder="Seleccionar Tipo de Acondicionamiento"
          data={conditioningsOptions}
          selectedValue={conditioningsOptions.find(
            (option) => option.value.toString() === form.typeConditioningSelect
          )}
          onValueChange={(item) =>
            setForm((prevState) => ({
              ...prevState,
              typeConditioningSelect: item.value.toString(),
            }))
          }
          iconRef="albums-outline" // Puedes usar el ícono que prefieras
        />

        <ThemedTextInput
          placeholder="Ingresar salario del jornal"
          keyboardType="numeric"
          autoCapitalize="none"
          value={form.salary}
          iconRef="cash-outline"
          maxLength={12}
          onChangeText={(value) =>
            setForm({ ...form, salary: value.replace(/\s/g, "") })
          }
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
          onPress={() => console.log()}
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
          onPress={() => router.back()}
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
    </Layout>
  );
};

export default FormConditioningCrop;
