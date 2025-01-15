import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";

import { router } from "expo-router";

// import ThemedLink from "@/presentation/theme/components/ThemedLink";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import ThemedLink from "@/presentation/theme/components/ThemedLink";

const RegisterScreen = () => {
  const { login } = useAuthStore();

  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, "background");

  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    document: "",
    names: "",
    surnames: "",
    username: "",
    email: "",
    telephone: "",
    password: "",
  });

  const onRegister = async () => {
    const { email, password } = form;

    console.log({ email, password });

    if (email.length === 0 || password.length === 0) {
      return;
    }

    setIsPosting(true);
    const wasSuccessful = await login(email, password);
    setIsPosting(false);

    if (wasSuccessful) {
      router.replace("/");
      return;
    }

    Alert.alert("Error", "Usuario o contraseña no son correctos");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
          backgroundColor: backgroundColor,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.1,
          }}
        >
          <ThemedText type="title">Registrarme</ThemedText>
          <ThemedText style={{ color: "grey" }}>
            Por favor ingresa sus datos para continuar con tu registro.
          </ThemedText>
        </View>

        {/* Email y Password */}
        <View style={{ marginTop: 20 }}>
          <ThemedTextInput
            placeholder="Numero de documento"
            keyboardType="numeric"
            autoCapitalize="none"
            icon="id-card-outline"
            value={form.document}
            onChangeText={(value) => setForm({ ...form, document: value })}
          />
          <ThemedTextInput
            placeholder="Nombres"
            keyboardType="default"
            autoCapitalize="words"
            icon="checkmark-done-circle"
            value={form.names}
            onChangeText={(value) => setForm({ ...form, names: value })}
          />

          <ThemedTextInput
            placeholder="Apellidos"
            keyboardType="default"
            autoCapitalize="words"
            icon="checkmark-done-circle"
            value={form.surnames}
            onChangeText={(value) => setForm({ ...form, surnames: value })}
          />
          <ThemedTextInput
            placeholder="Numero de Celular"
            keyboardType="numeric"
            autoCapitalize="none"
            icon="phone-portrait-outline"
            value={form.telephone}
            onChangeText={(value) => setForm({ ...form, telephone: value })}
          />

          <ThemedTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <ThemedTextInput
            placeholder="Nombre de Usuario"
            keyboardType="default"
            autoCapitalize="none"
            icon="checkmark-done-circle"
            value={form.username}
            onChangeText={(value) => setForm({ ...form, username: value })}
          />

          <ThemedTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>

        {/* Spacer */}
        <View style={{ marginTop: 10 }} />

        {/* Botón */}
        <ThemedButton
          icon="arrow-forward-outline"
          onPress={onRegister}
          disabled={isPosting}
        >
          Ingresar
        </ThemedButton>

        {/* Spacer */}
        <View style={{ marginTop: 40 }} />

        {/* Enlace a registro */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemedText>¿Ya tienes una cuenta?</ThemedText>
          <ThemedLink href="auth/login" style={{ marginHorizontal: 5 }}>
            Iniciar Sesion
          </ThemedLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
