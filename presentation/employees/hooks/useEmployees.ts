import { getFarm } from "@/core/farms/actions/get-farm.actions";
import { useQuery } from "@tanstack/react-query";

export const useEmployees = (farmId: string) => {
  const farmQuery = useQuery({
    queryKey: ["farms", farmId],
    queryFn: () => getFarm(farmId),
    staleTime: 1000 * 60, // 1 minuto
  });

  // TODO: Mutacion

  // TODO: Mantener el id de la finca

  return {
    // metodos
    farmQuery,
  };
};
