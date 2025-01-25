import LogoutIconButton from "@/presentation/components/LogoutIconButton";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
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
          backgroundColor: "#f0f6fe",
        },
        contentStyle: {
          backgroundColor: "white",
        },
        // headerTintColor: "#f0f6fe",
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={"grid-outline"}
            className="mr-5"
            size={20}
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
      {/* example123re@gmail.com */}
    </Stack>
  );
};
export default StackLayout;
