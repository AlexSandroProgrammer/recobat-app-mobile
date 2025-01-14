import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemeTextInput from "@/presentation/theme/components/ThemeTextInput";
import { KeyboardAvoidingView, useWindowDimensions, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 40 }}>
        <View style={{ paddingTop: height * 0.35 }}>
          <ThemedText type="title">Inicio de Sesion</ThemedText>
          <ThemedText type="default">
            Por favor Ingresa tus credenciales
          </ThemedText>
        </View>

        {/* Email y password */}
        <View style={{ marginTop: 20 }}>
          <ThemeTextInput
            placeholder="Ingresa tu email"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
          />

          <ThemeTextInput
            placeholder="Ingresa tu contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
