import Layout from "@/presentation/layouts/Layout";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ConditioningCard } from "@/presentation/proccess/components/ConditioningCard";

const ListProccessScreen = () => {
  // Obtenemos el id de los parámetros de la URL
  const { id } = useLocalSearchParams<{ id: string }>();

  console.log(`id del proceso: ${id}`);

  return (
    <Layout>
      <View className="px-5">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row">
            <Ionicons name="aperture-outline" size={40} color="blue" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-kanit text-black-100">
                Procesos
              </Text>
              <Text className="text-base font-kanit-bold text-black-300">
                Cultivos Transitorios
              </Text>
            </View>
          </View>
        </View>
        <View className="flex gap-5 mt-5">
          {/* Card para el proceso de Acondicionamiento */}
          <ConditioningCard
            id={id}
            title="Acondicionamiento del terreno"
            description="En este proceso aprenderas sobre como acondicionar tus terrenos de una manera segura y confiable."
          />
        </View>
      </View>
    </Layout>
  );
};

export default ListProccessScreen;
