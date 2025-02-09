import { getFarmsForUser } from "@/core/farms/actions/get-farms.actions";
import { useQuery } from "@tanstack/react-query";

export const useFarms = (idUser: number) => {
  const farmsQuery = useQuery({
    queryKey: ["farms"],
    queryFn: () => getFarmsForUser(idUser),
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  return {
    farmsQuery,
  };
};
