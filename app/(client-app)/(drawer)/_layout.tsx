import CustomDrawer from "@/presentation/components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "#4880e9",
        headerShadowVisible: false,
        //* cambiamos el ancho
        drawerStyle: {
          width: 260,
        },
        sceneStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: "Inicio",
          title: "Inicio",
          drawerIcon: () => (
            <Ionicons name="home-outline" size={26} color="#4880e9" />
          ),
        }}
      />
      <Drawer.Screen
        name="farms/index"
        options={{
          drawerLabel: "Fincas",
          title: "Lista de Fincas",
          drawerIcon: () => (
            <Ionicons name="albums-outline" size={26} color="#4880e9" />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
