import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { updateUserData } from "@/core/auth/actions/auth-actions";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import SnackBarNotificationDanger from "@/presentation/components/notifications/SnackBarNotificationDanger";

import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import Layout from "@/presentation/layouts/Layout";
import { SelectItem } from "@/core/theme/index.interface";
import ThemedSelect from "@/presentation/components/theme/ThemedSelect";
import { ActivityIndicator } from "react-native-paper";

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

  // Opciones para el select del tipo de documento
  const documentTypeOptions: SelectItem[] = [
    { label: "Tarjeta de Identidad", value: "T.I." },
    { label: "Cedula de Ciudadania", value: "C.C." },
    { label: "Cedula de Extranjeria", value: "C.E." },
  ];

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

    //* Hacemos el cargue de la app
    if (authSuccess) {
      Alert.alert(
        "Todo salió bien!",
        "Datos actualizados correctamente, Ahora te invitamos a iniciar sesión, para confirmar el registro de tu cuenta",
        [{ text: "Aceptar", onPress: async () => await logout() }]
      );
      return;
    }
    showSnackbar("Usuario o contraseña no son correctos.");
  };

  return (
    <>
      <Layout>
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
            <ThemedSelect
              placeholder="Seleccionar Tipo de documento"
              data={documentTypeOptions}
              selectedValue={documentTypeOptions.find(
                (option) => option.value === form.type_document
              )}
              onValueChange={(item) =>
                setForm((prevState) => ({
                  ...prevState,
                  type_document: item.value.toString(),
                }))
              }
              iconRef="document-text-outline" // Puedes usar el ícono que prefieras
            />

            <ThemedTextInput
              placeholder="Numero de documento"
              keyboardType="number-pad"
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
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
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
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
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
                {isPosting ? (
                  <ActivityIndicator size="small" color="#ffffff" />
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
          </View>
        </View>
      </Layout>
      <SnackBarNotificationDanger
        visible={snackbar.visible}
        onDismiss={hideSnackbar}
        message={snackbar.message}
      />
    </>
  );
};

export default UpdateDataScreen;
