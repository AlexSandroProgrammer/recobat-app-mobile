import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { usePlots } from "../hooks/usePlot";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { Ionicons } from "@expo/vector-icons";
import icons from "@/constants/icons";
import { RelativePathString, router } from "expo-router";
import { CardInfo } from "@/presentation/components/cards/CardInfo";
import { PlotCard } from "./PlotCard";

const ListPlots = ({ farmId }: { farmId: string }) => {
  const dangerColor = "#f44336";
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
      "Todo salió bien!",
      "Datos actualizados correctamente, Ahora te invitamos a iniciar sesión, para confirmar el registro de tu cuenta",
      [{ text: "Aceptar", onPress: () => router.push("/farms") }]
    );
    return;
  }

  return (
    <View className="px-5">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row">
          <Ionicons name="home-outline" size={30} />
          <View className="flex flex-col items-start ml-2 justify-center">
            <Text className="text-xs font-kanit text-black-100">
              {farm.codeFarm}
            </Text>
            <Text className="text-base font-kanit-bold text-black-300">
              {farm.nameFarm} ({farm.address})
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ marginRight: 7 }}
          onPress={() => router.push("/farms")}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={25}
            color={dangerColor}
          />
        </TouchableOpacity>
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
