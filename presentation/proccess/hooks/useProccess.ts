import { getPlotsForFarm } from "@/core/plots/actions/get-plots.actions";
import { useQuery } from "@tanstack/react-query";

export const useProccess = (idProccess: string) => {
  const proccessQuery = useQuery({
    queryKey: ["proccess", idProccess],
    queryFn: () => getPlotsForFarm(idProccess),
    staleTime: 1000 * 60, // 1 minuto
  });

  return {
    proccessQuery,
  };
};
