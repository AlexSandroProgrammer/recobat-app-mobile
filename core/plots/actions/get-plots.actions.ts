import { recobatApi } from "@/core/api/recobatApi";
import { FarmResponse } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getPlotsForFarm = async (idFarm: string) => {
  try {
    const { data } = await recobatApi.get<FarmResponse>(
      `farms/${idFarm}?populate=plots`
    );
    return data.data;
  } catch (error) {
    throw new Error(
      "Error al momento de obtener los datos de las fincas del paciente"
    );
  }
};
