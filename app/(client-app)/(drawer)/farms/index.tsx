import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import FarmList from "@/presentation/farms/components/FarmList";
import { View } from "react-native";

const FarmScreen = () => {
  // llamamos al usuario autenticado
  const { user } = useAuthStore();
  // Si el usuario no está cargado, mostramos un componente de carga
  if (!user) {
    return <IsLoadingRefresh />;
  }

  return (
    <View>
      {
        // verificamos que el usuario ya se haya cargado
        (user && <FarmList userId={user.id} />) || (
          // si el usuario no se ha cargado, mostramos un mensaje de error
          <IsLoadingRefresh />
        )
      }
    </View>
  );
};

export default FarmScreen;
