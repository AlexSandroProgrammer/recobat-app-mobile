import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { usePlots } from "../hooks/usePlot";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { Ionicons } from "@expo/vector-icons";
import icons from "@/constants/icons";
import { RelativePathString, router } from "expo-router";
import { CardInfo } from "@/presentation/components/cards/CardInfo";
import { PlotCard } from "./PlotCard";

const ListPlots = ({ farmId }: { farmId: string }) => {
  const { plotsQuery } = usePlots(farmId); // 🔹 Esto ahora siempre se ejecuta

  // Si está cargando, mostramos el loader
  if (plotsQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  // Aseguramos que `farms` siempre tenga un valor
  const farm = plotsQuery?.data! ?? [];
  const plots = farm.plots;
  if (!plots) {
    // enviamos una alerta y redireccionamos al usuario
    Alert.alert(
      "Algo salio mal!",
      "Error al momento de obtener los lotes, te vamos a regresar al listado de fincas.",
      [{ text: "Aceptar", onPress: () => router.push("/farms") }]
    );
    return;
  }

  return (
    <View className="px-5">
      <View className="mb-3">
        <View className="flex flex-row items-start justify-end">
          <TouchableOpacity
            onPress={() => router.push("/farms")}
            className="bg-red-500 shadow-md shadow-zinc-300 rounded-full w-2/6 py-2"
          >
            <View className="flex flex-row items-center justify-center">
              <Ionicons
                name="arrow-back-circle-outline"
                size={25}
                color="white"
              />
              <Text className="text-lg font-kanit-bold text-white ml-1">
                Regresar
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row items-center">
        <View className="flex flex-row">
          <Ionicons name="home-outline" size={35} />
          <View className="flex flex-col items-start ml-2 justify-center">
            <Text className="text-sm font-kanit text-black-100">
              # {farm.codeFarm}
            </Text>
            <Text className="text-lg font-kanit-bold text-black-300">
              {farm.nameFarm}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row items-center">
        <View className="flex flex-row">
          <Ionicons name="location-outline" size={30} />
          <View className="flex flex-col items-start ml-2 justify-center">
            <Text className="text-lg font-kanit-bold text-black-300">
              ({farm.address})
            </Text>
          </View>
        </View>
      </View>
      <View className="mt-5">
        {plots.length > 0 ? (
          plots.map((plot) => <PlotCard key={plot.id} {...plot} />)
        ) : (
          <CardInfo
            title="No tienes lotes registrados"
            icon="arrow-back-circle-outline"
            description="Clic para volver a tu listado de fincas"
            route={"/farms" as RelativePathString}
          />
        )}
      </View>
    </View>
  );
};

export default ListPlots;
