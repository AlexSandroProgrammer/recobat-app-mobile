import { getConditioningTypes } from "@/core/conditioning/actiones/get-types.actions";
import { useQuery } from "@tanstack/react-query";

export const useTypeConditionings = () => {
  const typesConditioningsQuery = useQuery({
    queryKey: ["types_conditionings"],
    queryFn: () => getConditioningTypes(),
    staleTime: 1000 * 60, // 1 minuto
  });

  // TODO: Mutacion

  // TODO: Mantener el id del empleado

  return {
    // metodos
    typesConditioningsQuery,
  };
};
