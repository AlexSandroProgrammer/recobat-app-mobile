import { recobatApi } from "@/core/api/recobatApi";
import { FarmForPlot } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getFarmForPlot = async (Plotid: string) => {
  try {
    console.log(Plotid);
    const { data } = await recobatApi.get<FarmForPlot>(
      `/plots/${Plotid}?populate=farm`
    );
    console.log(data);
    return data.data;
  } catch (error) {
    throw new Error(
      "Error al momento de obtener los datos de las fincas del paciente"
    );
  }
};
