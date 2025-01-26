import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import ThemedTextInput from "@/presentation/components/theme/ThemedTextInput";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import useClient from "@/presentation/client/hooks/useClient";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import ThemedButtonGroup from "../../../presentation/components/theme/ThemedButtonGroup";

const UpdateDataScreen = () => {
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
    email: user.email,
    username: user.username,
  });

  const onUpdateData = async () => {
    // const { email, password } = form;
    // console.log({ email, password });
    // if (email.length === 0 || password.length === 0) {
    //   // showSnackbar("Por favor ingresa todos los datos.");
    //   Alert.alert(
    //     "Opsss!",
    //     "Faltan Datos por ingresar, por favor verifica los datos."
    //   );
    //   return;
    // }
    // setIsPosting(true);
    // const authSuccess = await login(email, password);
    // setIsPosting(false);
    // if (authSuccess) {
    //   router.replace("/");
    //   return;
    // }
    // Alert.alert("Error", "Usuario o contraseña no son correctos");
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
          <View className="px-10 mt-5">
            <Text className="text-3xl font-kanit-bold text-black-300 uppercase text-center mt-1">
              <Text className="text-primary-300">Completar Mis Datos</Text>
            </Text>
            <Text className="text-base text-center font-kanit text-black-200">
              Por favor ingresa los siguientes datos para terminar tu proceso de
              registro.
            </Text>

            <ThemedButtonGroup
              options={["T.I.", "C.E."]}
              selectedOptions={""}
              onSelect={(options) => console.log("")}
            />

            <ThemedTextInput
              placeholder="Correo electrónico o Usuario"
              keyboardType="email-address"
              // bloqueamos el campo
              editable={false}
              autoCapitalize="none"
              value={form.email}
              iconRef="mail-outline"
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <TouchableOpacity
              onPress={onUpdateData}
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
