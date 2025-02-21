import { View } from "react-native";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { useLocalSearchParams } from "expo-router";
import ListPlots from "@/presentation/plots/components/ListPlots";

const ListPlotsScreen = () => {
  // llamamos al usuario autenticado
  const { id } = useLocalSearchParams();

  if (!id) {
    return <IsLoadingRefresh />;
  }

  return (
    <>
      <ListPlots farmId={Array.isArray(id) ? id[0] : id} />
    </>
  );
};

export default ListPlotsScreen;
