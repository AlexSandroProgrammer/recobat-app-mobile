import icons from "@/constants/icons";
import images from "@/constants/images";
import { updateUserData } from "@/core/auth/actions/auth-actions";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import SnackBarNotificationDanger from "@/presentation/components/notifications/SnackBarNotificationDanger";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedButtonGroup from "../../../presentation/components/theme/ThemedButtonGroup";

const UpdateDataScreen = () => {
  const { user, logout } = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);

  const [form, setForm] = useState({
    id: user?.id || 0,
    email: user?.email || "",
    username: user?.username || "",
    names: "",
    surnames: "",
    document: "",
    telephone: "",
    type_document: "",
    stateData: "success",
  });

  // Estado para el Snackbar
  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "",
  });

  // Muestra o oculta el Snackbar
  const showSnackbar = (message: string) => {
    setSnackbar({ visible: true, message });
  };
  const hideSnackbar = () => {
    setSnackbar({ visible: false, message: "" });
  };

  const onUpdateData = async () => {
    const {
      email,
      username,
      names,
      surnames,
      document,
      telephone,
      type_document,
      id,
      stateData,
    } = form;

    if (
      email?.length === 0 ||
      username?.length === 0 ||
      names.length === 0 ||
      surnames.length === 0 ||
      document.length === 0 ||
      telephone.length === 0 ||
      type_document === "" ||
      stateData === ""
    ) {
      showSnackbar("Por favor ingresa todos los datos.");
      return;
    }

    setIsPosting(true);
    const authSuccess = await updateUserData(
      email,
      username,
      names,
      surnames,
      document,
      telephone,
      type_document,
      id,
      stateData
    );
    setIsPosting(false);

    //* hacemos el cargue de la app
    if (authSuccess) {
      Alert.alert(
        "Todo salió bien!",
        "Datos actualizados correctamente, Ahora te invitamos a iniciar sesion, para confirmar el registro de tu cuenta",
        [{ text: "Aceptar", onPress: async () => await logout() }]
      );
      return;
    }
    showSnackbar("Usuario o contraseña no son correctos.");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="justify-center h-full">
          <Image
            source={images.logo}
            className="w-full h-24"
            resizeMode="contain"
          />
          <View className="px-10 mt-5">
            <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
              <Text className="text-primary-300">Completar Mis Datos</Text>
            </Text>
            <Text className="text-base text-center font-kanit text-black-200">
              Por favor ingresa los siguientes datos para terminar tu proceso de
              registro.
            </Text>

            <View className="my-7">
              <Text className="text-base text-left font-kanit text-black-100 mb-10">
                Seleccionar Tipo de Documento:
              </Text>
              <ThemedButtonGroup
                options={["T.I.", "C.E."]}
                selectedOptions={form.type_document}
                onSelect={(selectedOption) =>
                  setForm((prevState) => ({
                    ...prevState,
                    type_document: selectedOption,
                  }))
                }
              />
            </View>

            <ThemedTextInput
              placeholder="Numero de documento"
              keyboardType="numeric"
              autoCapitalize="none"
              value={form.document}
              iconRef="card-outline"
              maxLength={12}
              onChangeText={(value) =>
                setForm({ ...form, document: value.replace(/\s/g, "") })
              }
            />

            <ThemedTextInput
              placeholder="Nombres"
              keyboardType="ascii-capable"
              autoCapitalize="words"
              value={form.names}
              iconRef="text-outline"
              onChangeText={(value) =>
                setForm({
                  ...form,
                  names: value
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
                })
              }
            />

            <ThemedTextInput
              placeholder="Apellidos"
              keyboardType="ascii-capable"
              autoCapitalize="none"
              value={form.surnames}
              iconRef="text-outline"
              onChangeText={(value) =>
                setForm({
                  ...form,
                  surnames: value
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
                })
              }
            />

            <ThemedTextInput
              placeholder="Numero de Celular"
              keyboardType="numeric"
              autoCapitalize="none"
              value={form.telephone}
              iconRef="phone-portrait-outline"
              onChangeText={(value) =>
                setForm({ ...form, telephone: value.replace(/\s/g, "") })
              }
            />

            <ThemedTextInput
              placeholder="Correo electrónico o Usuario"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              iconRef="mail-outline"
              onChangeText={(value) =>
                setForm({ ...form, email: value.replace(/\s/g, "") })
              }
            />

            <ThemedTextInput
              placeholder="Nombre Usuario"
              keyboardType="ascii-capable"
              autoCapitalize="none"
              value={form.username}
              iconRef="person-outline"
              // evitamos que tenga espacios
              maxLength={30}
              onChangeText={(value) =>
                setForm({ ...form, username: value.replace(/\s/g, "") })
              }
            />

            <TouchableOpacity
              onPress={onUpdateData}
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
          </View>
        </View>
      </ScrollView>
      {/* Snackbar */}
      <SnackBarNotificationDanger
        visible={snackbar.visible}
        onDismiss={hideSnackbar}
        message={snackbar.message}
      />
    </SafeAreaView>
  );
};

export default UpdateDataScreen;
