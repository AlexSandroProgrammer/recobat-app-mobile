import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import FarmList from "@/presentation/farms/components/FarmList";
import { Text, View } from "react-native";

const FarmScreen = () => {
  // llamamos al usuario autenticado
  const { user } = useAuthStore();
  // Si el usuario no está cargado, mostramos un componente de carga
  if (!user) {
    return <IsLoadingRefresh />;
  }

  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
};

export default FarmScreen;
