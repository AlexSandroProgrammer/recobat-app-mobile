import LogoutIconButton from "@/presentation/components/theme/LogoutIconButton";
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
        headerTitleStyle: {
          fontFamily: "Poppins",
          fontWeight: "bold",
          fontSize: 20,
        },
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
            className="mr-3"
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
          title: "Recobat",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="farm/register"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="farm/[id]"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="farm/plots/[id]"
        options={{
          title: "Registro de Lote",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="farm/listPlot/[id]"
        options={{
          title: "Lotes de Mi Finca",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="proccess/verification/[id]"
        options={{
          title: "Verificar del Lote o Cultivo",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};
export default StackLayout;
