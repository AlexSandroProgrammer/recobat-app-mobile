import { recobatApi } from "@/core/api/recobatApi";
import { ListFarmsUserProps } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getFarmsForUser = async (idUser: number) => {
  try {
    const { data } = await recobatApi.get<ListFarmsUserProps>(
      `users/${idUser}?populate=farms`
    );
    return data.farms;
  } catch (error) {
    throw new Error(
      "Error al momento de obtener los datos de las fincas del paciente"
    );
  }
};
