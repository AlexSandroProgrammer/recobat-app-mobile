import { getUserData } from "@/core/client/actions/client-actions";
import { useQuery } from "@tanstack/react-query";

const useClient = (jwt: string, id?: string) => {
  const userQuery = useQuery({
    queryKey: ["user", jwt],
    queryFn: () => getUserData(jwt),
    staleTime: 1000 * 60 * 60,
  });
  return {
    userQuery,
  };
};

export default useClient;
