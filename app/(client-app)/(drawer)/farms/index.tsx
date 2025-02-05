import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import FarmList from "@/presentation/farms/components/FarmList";
import Layout from "@/presentation/layouts/Layout";
import { useRef } from "react";
import { Animated, View } from "react-native";

const FarmScreen = () => {
  // llamamos al usuario autenticado
  const { user } = useAuthStore();
  // Si el usuario no está cargado, mostramos un componente de carga
  const scrollY = useRef(new Animated.Value(0)).current;

  if (!user) {
    return <IsLoadingRefresh />;
  }
  return (
    <Layout>
      <FarmList userId={user.id} />
    </Layout>
  );
};

export default FarmScreen;
