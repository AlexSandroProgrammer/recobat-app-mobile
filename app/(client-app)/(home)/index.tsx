import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-400 font-bold m-2">
        Edita esta pagina para el index del home.
      </Text>
      <Link href="/auth/login">Iniciar Sesion</Link>
      <Link href="/">Example 2</Link>
      <Link href="/">Example 3</Link>
      <Link href="/">Example 4</Link>
      <Link href="/">Example 5</Link>
    </View>
  );
}
