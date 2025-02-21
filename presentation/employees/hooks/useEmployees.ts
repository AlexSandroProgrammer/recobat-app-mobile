import { getEmployees } from "@/core/employees/actions/employees.actions";
import { useQuery } from "@tanstack/react-query";

export const useEmployees = (farmId: string) => {
  const employeesQuery = useQuery({
    queryKey: ["farms", farmId],
    queryFn: () => getEmployees(farmId),
    staleTime: 1000 * 60, // 1 minuto
  });

  // TODO: Mutacion

  // TODO: Mantener el id de la finca

  return {
    // metodos
    employeesQuery,
  };
};
