import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import Layout from "@/presentation/layouts/Layout";
import { useLocalSearchParams } from "expo-router";
import ListPlots from "@/presentation/plots/components/ListPlots";
import { View } from "react-native";

const ListPlotsScreen = () => {
  // llamamos al usuario autenticado
  const { id } = useLocalSearchParams();

  if (!id) {
    return (
      <View className="flex h-full content-center justify-center">
        <IsLoadingRefresh />
      </View>
    );
  }

  return (
    <Layout>
      <ListPlots farmId={Array.isArray(id) ? id[0] : id} />
    </Layout>
  );
};

export default ListPlotsScreen;
