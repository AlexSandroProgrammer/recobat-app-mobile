import { getEmployees } from "@/core/employees/actions/employees.actions";
import { useQuery } from "@tanstack/react-query";

export const useEmployees = (farmId: string) => {
  const employeesQuery = useQuery({
    queryKey: ["employees", farmId],
    queryFn: () => getEmployees(farmId),
    staleTime: 1000 * 60, // 1 minuto
  });

  // TODO: Mutacion

  return {
    // metodos
    employeesQuery,
  };
};
