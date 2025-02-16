import { useQuery } from "@tanstack/react-query";
import { getGeneralProccess } from "@/core/general-proccess/actions/general-actions";

export const useProccess = (idPlot: string) => {
  const proccessQuery = useQuery({
    queryKey: ["proccess", idPlot],
    queryFn: () => getGeneralProccess(idPlot),
    staleTime: 1000 * 60, // 1 minuto
  });

  return {
    proccessQuery,
  };
};
