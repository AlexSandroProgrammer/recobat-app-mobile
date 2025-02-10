import { useQuery } from "@tanstack/react-query";
import { getFarmForPlot } from "@/core/transitional-crop/actions/get-plot.actions";

export const useFarmForPlot = (PlotId: string) => {
  const farmForPlotQuery = useQuery({
    queryKey: ["farm_for_plot", PlotId],
    queryFn: () => getFarmForPlot(PlotId),
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  return {
    farmForPlotQuery,
  };
};
