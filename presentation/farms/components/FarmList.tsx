import { useFarms } from "../hooks/useFarms";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import DropProfile from "@/presentation/components/theme/DropProfile";
import { Animated, View } from "react-native";
import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { RelativePathString } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import { FarmCard } from "@/presentation/components/cards/FarmCard";
import { CardInfo } from "@/presentation/components/cards/CardInfo";
import { Ionicons } from "@expo/vector-icons";

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
          <FlatList
            data={farms}
            className="gap-5"
            keyExtractor={(farm) => farm.id.toString()}
            renderItem={({ item }) => (
              <View className="flex gap-6">
                <FarmCard
                  address={item.address}
                  codeFarm={item.codeFarm}
                  telephone={item.telephone}
                  nameFarm={item.nameFarm}
                  id={item.id}
                  latitude={item.latitude}
                  altitude={item.altitude}
                />
              </View>
            )}
          />
        ) : (
          <CardInfo
            title="No tienes Fincas!"
            icon="add-circle-outline"
            description="Por favor registra tu primera finca"
            route="/"
          />
        )}
      </View>
    </View>
  );
};

export default FarmList;
