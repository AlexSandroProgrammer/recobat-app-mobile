import { recobatApi } from "@/core/api/recobatApi";
import { ListFarmsUserProps } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getFarmsForUser = async (
  limit = 11,
  pagination = 1,
  idUser: number
) => {
  try {
    const { data } = await recobatApi.get<ListFarmsUserProps>(
      `users/${idUser}?populate=farms`,
      {
        params: { limit, pagination },
      }
    );
    const { farms } = await data;
    return farms;
  } catch (error) {
    throw new Error(
      "Error al momento de obtener los datos de las fincas del paciente"
    );
  }
};
