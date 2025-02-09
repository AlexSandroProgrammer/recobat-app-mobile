import { recobatApi } from "@/core/api/recobatApi";
import { FarmBody } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getFarm = async (farmId: string) => {
  try {
    const { data } = await recobatApi.get<FarmBody>(`farms/${farmId}`);
    return data.data;
  } catch (error) {
    throw new Error("Error al momento de obtener los datos de la finca");
  }
};
