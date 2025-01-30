import { getFarmsForUser } from "@/core/farm/actions/farm-actions";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { useQuery } from "@tanstack/react-query";

export const useFarms = (idUser: number) => {
  const farmsQuery = useQuery({
    queryKey: ["farms", idUser],
    queryFn: () => getFarmsForUser(idUser),
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  return {
    farmsQuery,
  };
};
