import { getProccessAll } from "@/core/proccess/actions/proccess-actions";
import { useQuery } from "@tanstack/react-query";

export const useProccessAll = (idGeneralProccess: string) => {
  const proccessAllQuery = useQuery({
    queryKey: ["proccessAll", idGeneralProccess],
    queryFn: () => getProccessAll(idGeneralProccess),
    staleTime: 1000 * 60 * 60, // 1 minuto
  });

  return {
    proccessAllQuery,
  };
};
