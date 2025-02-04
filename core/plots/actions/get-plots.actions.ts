import { recobatApi } from "@/core/api/recobatApi";
import { ListPlotsForFarm } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getPlotsForFarm = async (idUser: number) => {
  try {
    const { data } = await recobatApi.get<ListPlotsForFarm>(
      `farms/${idUser}?populate=plots`
    );
    return data;
  } catch (error) {
    throw new Error(
      "Error al momento de obtener los datos de las fincas del paciente"
    );
  }
};
