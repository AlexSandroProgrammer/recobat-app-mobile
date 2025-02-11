import { getCropTypes } from "@/core/transitional-crop/actions/get-croptypes.actions";
import { useQuery } from "@tanstack/react-query";

export const useTypeCrop = (TransitionalId: string) => {
  const cropTypesQuery = useQuery({
    queryKey: ["crop_types", TransitionalId],
    queryFn: () => getCropTypes(TransitionalId),
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  return {
    cropTypesQuery,
  };
};
