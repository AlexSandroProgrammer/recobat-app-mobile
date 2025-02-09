import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import Layout from "@/presentation/layouts/Layout";
import { useLocalSearchParams } from "expo-router";
import ListPlots from "@/presentation/plots/components/ListPlots";

const ListPlotsScreen = () => {
  // llamamos al usuario autenticado
  const { id } = useLocalSearchParams();

  if (!id) {
    return <IsLoadingRefresh />;
  }

  return (
    <Layout>
      <ListPlots farmId={Array.isArray(id) ? id[0] : id} />
    </Layout>
  );
};

export default ListPlotsScreen;
