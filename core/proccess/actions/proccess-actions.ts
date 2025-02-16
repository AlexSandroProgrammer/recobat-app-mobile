import { recobatApi } from "@/core/api/recobatApi";
import { ResponseProccessAll } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getProccessAll = async (idGeneralProccess: string) => {
  try {
    const { data } = await recobatApi.get<ResponseProccessAll>(
      `/general-processes/${idGeneralProccess}?populate=*`
    );
    return data.data;
  } catch (error) {
    throw new Error(
      "Error al momento de obtener los datos de los procesos del proceso general"
    );
  }
};
