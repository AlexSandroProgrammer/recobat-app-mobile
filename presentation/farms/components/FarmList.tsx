import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { CardInfo } from "@/presentation/components/cards/CardInfo";
import { FarmCard } from "@/presentation/components/cards/FarmCard";
import DropProfile from "@/presentation/components/theme/DropProfile";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { RelativePathString } from "expo-router";
import { View } from "react-native";
import { useFarms } from "../hooks/useFarms";

const DataDropProfile: DropProfileProps = {
  title: "Mis Fincas",
  titleButton: "Registrar",
  routeModal: "/farm/register" as RelativePathString,
};

const FarmList = ({ userId }: { userId: number }) => {
  const { farmsQuery } = useFarms(userId); // 🔹 Esto ahora siempre se ejecuta

  // Si está cargando, mostramos el loader
  if (farmsQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  // Aseguramos que `farms` siempre tenga un valor
  const farms = farmsQuery?.data ?? [];
  return (
    <View className="px-5">
      <DropProfile {...DataDropProfile} />
      <View>
        {/* validamos si tiene fincas registradas */}
        {farms.length > 0 ? (
          farms.map((farm) => <FarmCard key={farm.id} {...farm} />)
        ) : (
          <CardInfo
            title="No tienes Fincas!"
            icon="add-circle-outline"
            description="Por favor registra tu primera finca"
            route={"/farms" as RelativePathString}
          />
        )}
      </View>
    </View>
  );
};

export default FarmList;
