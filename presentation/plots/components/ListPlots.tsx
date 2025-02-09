import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import DropProfile from "@/presentation/components/theme/DropProfile";
import { RelativePathString } from "expo-router";
import { View } from "react-native";

const DataDropProfile: DropProfileProps = {
  title: "Mis Fincas",
  titleButton: "Registrar",
  routeModal: "/farm/register" as RelativePathString,
};

const ListPlots = (farmId: string) => {
  console.log(farmId);
  // const { farmsQuery } = useFarms(userId); // 🔹 Esto ahora siempre se ejecuta

  // // Si está cargando, mostramos el loader
  // if (farmsQuery.isLoading) {
  //   return <IsLoadingRefresh />;
  // }

  // // Aseguramos que `farms` siempre tenga un valor
  // const farms = farmsQuery?.data ?? [];
  return (
    <View className="px-5">
      <DropProfile {...DataDropProfile} />
      {/* <View>
        {farms.length > 0 ? (
          farms.map((farm) => <FarmCard key={farm.id} {...farm} />)
        ) : (
          <CardInfo
            title="No tienes Fincas!"
            icon="add-circle-outline"
            description="Por favor registra tu primera finca"
            route={"/farms/index" as RelativePathString}
          />
        )}
      </View> */}
    </View>
  );
};

export default ListPlots;
