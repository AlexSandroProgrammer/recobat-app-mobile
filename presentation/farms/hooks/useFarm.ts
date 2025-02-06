import { getFarm } from "@/core/farms/actions/get-farm.actions";
import { useQuery } from "@tanstack/react-query";

export const useFarm = (farmId: string) => {
  const farmQuery = useQuery({
    queryKey: ["farms", farmId],
    queryFn: () => getFarm(farmId),
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  // TODO: Mutacion

  // TODO: Mantener el id de la finca

  return {
    // metodos
    farmQuery,
  };
};
