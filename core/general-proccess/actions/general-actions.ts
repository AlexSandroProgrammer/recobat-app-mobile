import { recobatApi } from "@/core/api/recobatApi";
import {
  BodyConditioningProcess,
  BodyGeneralProcess,
} from "../interfaces/index.interface";

import { Plot } from "../../plots/interfaces/index.interface";
import { PlotProccessProps } from "@/presentation/proccess/interfaces/index.interface";
/**
 * Registra el proceso general del cultivo.
 * @param plot Identificador de la parcela.
 * @param crop_type Tipo de cultivo.
 * @param init_date Fecha de inicio.
 * @param status_crop Estado del cultivo (por defecto "active").
 * @returns La información del proceso general o null en caso de error.
 */
export const registerGeneralProcess = async (
  documentId: string,
  crop_type: string,
  init_date: string,
  status_crop = "active"
): Promise<BodyGeneralProcess["data"] | null> => {
  try {
    const { data } = await recobatApi.post<BodyGeneralProcess>(
      "/general-processes",
      {
        data: {
          plots: [documentId],
          crop_types: [crop_type],
          init_date,
          status_crop,
        },
      }
    );

    console.log({ data });
    return data?.data ?? null;
  } catch (error) {
    console.error(`Error al registrar proceso general: ${error}`);
    return null;
  }
};

/**
 * Registra múltiples procesos secundarios asociados al proceso general.
 * @param id Identificador del proceso general.
 * @param status Estado para cada uno de los procesos (por defecto "enabled").
 * @returns true si todos los endpoints responden correctamente; false en caso contrario.
 */

export const registerAllProcesses = async (
  id: number,
  status = "enabled"
): Promise<boolean> => {
  // Configuración centralizada de los endpoints
  const endpointsConfig = [
    { url: "/conditioning-sub-details", field: "status_conditioning" },
    { url: "/disease-control-proccesses", field: "status_diesease_control" },
    { url: "/fertilization-proccesses", field: "status_fertilization" },
    { url: "/job-sub-proccess-details", field: "status_jobs_subproccess" },
    { url: "/pest-control-proccesses", field: "status_control_quimic" },
    { url: "/pest-organic-proccesses", field: "status_organic_control" },
    { url: "/soils-analysis-details", field: "status_soils_analyti" },
    { url: "/weed-control-proccesses", field: "status_weed_control" },
  ];

  try {
    // Se mapean las configuraciones a promesas de peticiones POST
    const requests = endpointsConfig.map(({ url, field }) =>
      recobatApi.post<BodyConditioningProcess>(url, {
        data: {
          general_processes: [id],
          [field]: status,
        },
      })
    );

    const responses = await Promise.all(requests);

    // Se verifica que cada respuesta contenga información válida
    const allSuccessful = responses.every((response) => response.data != null);
    if (!allSuccessful) {
      console.error("Algún endpoint no retornó el resultado esperado");
      return false;
    }
    return true;
  } catch (error) {
    console.error(`Error al registrar procesos múltiples: ${error}`);
    return false;
  }
};

//* accion para actualizar el estado del lote
export const updatedStatePlot = async (
  documentId: string,
  status_plot = "verified"
): Promise<boolean> => {
  try {
    const { data } = await recobatApi.put<Plot>(`/plots/${documentId}`, {
      data: {
        status_plot,
      },
    });
    return data !== null;
  } catch (error) {
    console.error(`Error al registrar proceso general: ${error}`);
    return false;
  }
};

/**
 * llamar los datos de procesos generales por lote.
 * @param idPlot Identificador del proceso general.
 * @returns devolvemos la data verificando si la trae o no
 */

export const getGeneralProccess = async (idPlot: string) => {
  try {
    const { data } = await recobatApi.get<PlotProccessProps>(
      `/plots/${idPlot}?populate=general_processes`
    );
    return data;
  } catch (error) {
    console.error(`Error al registrar proceso general: ${error}`);
    return null;
  }
};
