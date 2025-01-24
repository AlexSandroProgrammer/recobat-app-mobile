import { DrawerActions } from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
const PrincipalScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-400 font-bold m-2">
        Edita esta pagina para el PrincipalScreen del home.
      </Text>
      <Link href="/auth/login">Iniciar Sesion</Link>
    </View>
  );
};

export default PrincipalScreen;
