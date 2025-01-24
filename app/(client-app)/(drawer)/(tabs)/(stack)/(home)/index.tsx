import { DrawerActions } from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
const PrincipalScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
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
      <Link href="/farm">Fincas</Link>
      <Link href="/">Example 3</Link>
      <Link href="/">Example 4</Link>
      <Link href="/">Example 5</Link>
      <TouchableOpacity onPress={onToggleDrawer}>
        <Text>Toggle Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrincipalScreen;
