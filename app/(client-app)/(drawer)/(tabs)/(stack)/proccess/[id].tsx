import Layout from "@/presentation/layouts/Layout";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useProccess } from "@/presentation/proccess/hooks/useProccess";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { ProccessCard } from "@/presentation/proccess/components/ProccessCard";

const ProccessScreen = () => {
  // Obtenemos el id de los parámetros de la URL
  const { id } = useLocalSearchParams<{ id: string }>();
  // Obtenemos el id de la finca que viene como query
  const { farmId } = useLocalSearchParams<{ farmId: string }>();

  const { proccessQuery } = useProccess(id);

  if (proccessQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  const proccess = proccessQuery.data?.data;

  const generalProccess = proccess?.general_processes;

  return (
    <Layout>
      <View className="px-5">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row">
            <Ionicons name="sync-circle-outline" size={40} color="blue" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-kanit text-black-100">
                Cultivos En Proceso
              </Text>
              <Text className="text-base font-kanit-bold text-black-300">
                {proccess?.namePlot}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex gap-5 mt-5">
          {/* Card para el proceso de Acondicionamiento */}
          {generalProccess?.map((proccess, index) => (
            <ProccessCard
              key={index}
              id={id}
              farmId={farmId}
              documentId={proccess.documentId}
              title={proccess.id}
            />
          ))}
        </View>
      </View>
    </Layout>
  );
};

export default ProccessScreen;
