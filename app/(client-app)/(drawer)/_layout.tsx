import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import useClient from "@/presentation/client/hooks/useClient";
import CustomDrawer from "@/presentation/components/drawer/CustomDrawer";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import ModalWindow from "@/presentation/components/modals/ModalWindow";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { useEffect, useState } from "react";
const DrawerLayout = () => {
  const [jwt, setJwt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJwt = async () => {
      try {
        const token = await SecureStorageAdapter.getItem("jwt");
        console.log(token);
        setJwt(token || null);
      } catch (error) {
        console.error("Error al obtener el token:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJwt();
  }, []);

  const { userQuery } = useClient(jwt || "");
  if (userQuery.isLoading) {
    return <IsLoadingRefresh />;
  }
  const user = userQuery.data!;

  // verificamos si el usuario tiene todos los datos registrados
  if (!user.stateData) {
    return <ModalWindow />;
  }
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
        headerTitleAlign: "center",
        // headerRight: () => <LogoutIconButton />,
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
          drawerLabel: "Mis Fincas",
          title: "Mis Fincas",
          drawerIcon: () => (
            <Ionicons name="albums-outline" size={26} color="#4880e9" />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
