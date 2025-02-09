import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import Layout from "@/presentation/layouts/Layout";
import ListPlots from "@/presentation/plots/components/ListPlots";
import { useLocalSearchParams } from "expo-router";

const ListPlotsScreen = () => {
  // llamamos al usuario autenticado
  const { id } = useLocalSearchParams();

  if (!id) {
    return <IsLoadingRefresh />;
  }

  return (
    <Layout>
      <ListPlots farmId={id} />
    </Layout>
  );
};

export default ListPlotsScreen;
