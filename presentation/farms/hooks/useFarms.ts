import { getFarmsForUser } from "@/core/farm/actions/farm-actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useFarms = (idUser: number) => {
  const farmsQuery = useInfiniteQuery({
    queryKey: ["farms", "infinite"],
    queryFn: ({ pageParam }) => getFarmsForUser(10, pageParam * 10, idUser),
    staleTime: 1000 * 60 * 5, // 5 minutos
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => allPages.length,
  });

  return {
    // llamamos el metodo
    farmsQuery,
    loadNextPage: farmsQuery.fetchNextPage,
  };
};
