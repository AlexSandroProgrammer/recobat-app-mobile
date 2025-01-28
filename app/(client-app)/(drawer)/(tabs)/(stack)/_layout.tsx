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
      ></Stack.Screen>
      <Stack.Screen
        name="farm/registerfarm"
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default StackLayout;
