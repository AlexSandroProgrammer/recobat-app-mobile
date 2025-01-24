import LogoutIconButton from "@/presentation/components/LogoutIconButton";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
const StackLayout = () => {
  const navigation = useNavigation();
  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop());
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
        headerRight: () => <LogoutIconButton />,
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="farm/index"
        options={{
          title: "Mis Fincas",
        }}
      />
    </Stack>
  );
};
export default StackLayout;
