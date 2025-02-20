import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { CardInfo } from "@/presentation/components/cards/CardInfo";
import { FarmCard } from "@/presentation/components/cards/FarmCard";
import DropProfile from "@/presentation/components/theme/DropProfile";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { RelativePathString, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useFarms } from "../hooks/useFarms";
import Layout from "@/presentation/layouts/Layout";
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
    <Layout>
      <View className="px-5">
        <View className="mb-2">
          <View className="flex flex-row items-start justify-end">
            <TouchableOpacity
              onPress={() => router.push("/")}
              className="bg-red-500 shadow-md shadow-zinc-300 rounded-2xl w-2/6 py-2"
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
    </Layout>
  );
};

export default FarmList;
