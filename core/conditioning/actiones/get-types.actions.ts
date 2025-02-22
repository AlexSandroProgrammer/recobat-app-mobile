import { recobatApi } from "@/core/api/recobatApi";
import { ListTypesConditioning } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getConditioningTypes = async () => {
  try {
    const { data } = await recobatApi.get<ListTypesConditioning>(
      `/type-conditionings`
    );
    return data;
  } catch (error) {
    throw new Error("Error al momento de obtener los datos de la finca");
  }
};
