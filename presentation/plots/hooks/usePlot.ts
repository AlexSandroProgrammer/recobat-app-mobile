import { getPlotsForFarm } from "@/core/plots/actions/get-plots.actions";
import { useQuery } from "@tanstack/react-query";

export const usePlots = (idFarm: string) => {
  const plotsQuery = useQuery({
    queryKey: ["plots", idFarm],
    queryFn: () => getPlotsForFarm(idFarm),
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  return {
    plotsQuery,
  };
};
