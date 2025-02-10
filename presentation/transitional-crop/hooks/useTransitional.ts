import { useQuery } from "@tanstack/react-query";
import { getTransitionalCrops } from "@/core/transitional-crop/actions/get-transitional.actions";

export const useTransitional = () => {
  const transitionalQuery = useQuery({
    queryKey: ["transitional_crops"],
    queryFn: () => getTransitionalCrops(),
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  return {
    transitionalQuery,
  };
};
