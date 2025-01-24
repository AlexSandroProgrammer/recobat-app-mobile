import { Link } from "expo-router";
import { Text, View } from "react-native";

const FarmScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-400 font-bold m-2">Vista Lista de Lotes</Text>
      <Link href="/auth/login">Iniciar Sesion</Link>
    </View>
  );
};

export default FarmScreen;
