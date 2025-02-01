import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import FarmList from "@/presentation/farms/components/FarmList";
import { RelativePathString } from "expo-router";

const DataDropProfile: DropProfileProps = {
  title: "Mis Fincas",
  titleButton: "Registrar",
  routeModal: "/farm/register" as RelativePathString,
};

const FarmScreen = () => {
  // llamamos al usuario autenticado
  const { user } = useAuthStore();
  // Si el usuario no está cargado, mostramos un componente de carga
  if (!user) {
    return <IsLoadingRefresh />;
  }

  return <FarmList userId={user?.id}></FarmList>;
};

export default FarmScreen;
