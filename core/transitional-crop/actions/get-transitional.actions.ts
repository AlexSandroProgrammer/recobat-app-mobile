import { recobatApi } from "@/core/api/recobatApi";
import { ListTransitionalCrop } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getTransitionalCrops = async () => {
  try {
    const { data } = await recobatApi.get<ListTransitionalCrop>(
      "/transitional-crops"
    );

    return data;
  } catch (error) {
    throw new Error(
      "Error al momento de obtener los datos de las fincas del paciente"
    );
  }
};
