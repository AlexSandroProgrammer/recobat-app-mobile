import Layout from "@/presentation/layouts/Layout";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { useTransitional } from "@/presentation/transitional-crop/hooks/useTransitional";
import { SelectItem } from "@/core/theme/index.interface";
import FormVerificationCrop from "@/presentation/transitional-crop/components/FormVerificationCrop";
import { useFarmForPlot } from "@/presentation/transitional-crop/hooks/useFarmForPlot";
import { useLocalSearchParams } from "expo-router";

const InitialCropScreen = () => {
  // Obtenemos el id de los parámetros de la URL
  const { id } = useLocalSearchParams<{ id: string }>();
  const { transitionalQuery } = useTransitional();
  const { farmForPlotQuery } = useFarmForPlot(`${id}`);

  if (farmForPlotQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  if (transitionalQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  // Obtenemos la data del query, y si no existe dejamos un arreglo vacío
  const transitional = transitionalQuery?.data?.data ?? [];
  const farmPlot = farmForPlotQuery?.data! ?? [];

  // Mapeamos los datos para obtener solo el id y el nombre del cultivo
  const filteredTransitional = transitional.map((crop) => ({
    label: crop.nameCrop,
    value: crop.documentId,
  }));

  // Opciones para el select del cultivo
  const cropOptions: SelectItem[] = filteredTransitional;

  return (
    <Layout>
      <FormVerificationCrop
        farmPlot={farmPlot}
        id={id}
        cropOptions={cropOptions}
      />
    </Layout>
  );
};

export default InitialCropScreen;
