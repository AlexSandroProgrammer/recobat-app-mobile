import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import useClient from "@/presentation/client/hooks/useClient";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import ThemedButtonGroup from "../../../presentation/components/theme/ThemedButtonGroup";
import { UserData } from "../../../core/auth/interfaces/index.interface";
import images from "@/constants/images";
import { Formik } from "formik";
import { router } from "expo-router";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";

const UpdateDataScreen = () => {
  const { updateUser } = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);
  const [jwt, setJwt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJwt = async () => {
      try {
        const token = await SecureStorageAdapter.getItem("jwt");
        setJwt(token || null);
      } catch (error) {
        console.error("Error al obtener el token:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJwt();
  }, []);

  const { userQuery } = useClient(jwt || "");

  if (userQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  const user = userQuery.data!;

  const [form, setForm] = useState({
    id: user.id,
    email: user.email,
    username: user.username,
    names: "",
    surnames: "",
    document: "",
    telephone: "",
    type_document: "",
    stateData: "success",
  });

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
      email.length === 0 ||
      username.length === 0 ||
      names.length === 0 ||
      surnames.length === 0 ||
      document.length === 0 ||
      telephone.length === 0 ||
      type_document === "" ||
      stateData === ""
    ) {
      // showSnackbar("Por favor ingresa todos los datos.");
      Alert.alert(
        "Opsss!",
        "Faltan Datos por ingresar, por favor verifica los datos."
      );
      return;
    }

    setIsPosting(true);
    const authSuccess = await updateUser(
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
      Alert.alert("Éxito", "Datos actualizados correctamente.");
      router.replace("/");
      return;
    }
    Alert.alert("Error", "Error, por favor verifica tus datos.");
    // showSnackbar("Usuario o contraseña no son correctos.");
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

            <View className="my-5">
              <Text className="text-base text-left font-kanit text-black-100 mb-7">
                Tipo de Documento:
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
              // escribimos la primera letra en mayuscula cada vez que se de un espacio o que sea la primera letra
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
              onChangeText={(value) => setForm({ ...form, surnames: value })}
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
              // bloqueamos el campo
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
    </SafeAreaView>
  );
};

export default UpdateDataScreen;
