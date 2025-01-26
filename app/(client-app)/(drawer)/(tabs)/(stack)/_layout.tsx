import LogoutIconButton from "@/presentation/components/LogoutIconButton";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
const StackLayout = () => {
  const navigation = useNavigation();
  const onHeaderLeftClick = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "white",
        },
        contentStyle: {
          backgroundColor: "white",
        },
        // headerTintColor: "#f0f6fe",
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={"menu-outline"}
            className="mr-5"
            size={25}
            onPress={onHeaderLeftClick}
          />
        ),
        headerRight: () => <LogoutIconButton />,
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: "Bienvenido",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="user/index"
        options={{
          title: "Editar Mis Datos",
          headerTitleAlign: "center",
        }}
      ></Stack.Screen>
    </Stack>
  );
};
export default StackLayout;
