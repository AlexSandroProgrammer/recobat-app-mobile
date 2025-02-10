//* creamos una funcion para el login del usuario
import { recobatApi } from "@/core/api/recobatApi";
import { Plot } from "../interfaces/index.interface";

export const registerPlot = async (
  namePlot: string,
  size: string,
  farmId: string
) => {
  try {
    const { data } = await recobatApi.post<Plot>("/plots", {
      data: {
        namePlot,
        size,
        farm: farmId,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    // throw new Error("Error al momento de iniciar sesion");
    return null;
  }
};
