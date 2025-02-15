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
        headerStyle: {
          backgroundColor: "white",
        },
        contentStyle: {
          backgroundColor: "white",
        },
        // le quitamos el sombreado de abajo al element
        // headerTintColor: "#f0f6fe",
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={"menu-outline"}
            className="mr-1"
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
          animation: "fade",
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
          animation: "fade",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="farm/listPlot/[id]"
        options={{
          title: "Lotes de Mi Finca",
          animation: "fade",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="proccess/verification/[id]"
        options={{
          title: "Verificacion del Cultivo",
          animation: "fade",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="proccess/listProccess/[id]"
        options={{
          title: "Procesos de Cultivo",
          animation: "fade",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="proccess/[id]"
        options={{
          title: "Procesos del Lote",
          animation: "fade",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};
export default StackLayout;
