import { getPlotsForFarm } from "@/core/plots/actions/get-plots.actions";
import { useQuery } from "@tanstack/react-query";

export const useConditioningInitial = (idFarm: string) => {
  const plotsQuery = useQuery({
    queryKey: ["plots", idFarm],
    queryFn: () => getPlotsForFarm(idFarm),
    staleTime: 1000 * 60, // 1 minuto
  });

  return {
    plotsQuery,
  };
};
