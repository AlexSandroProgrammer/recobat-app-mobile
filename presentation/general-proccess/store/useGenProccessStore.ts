// store/genProcessStore.ts
import { create } from "zustand";
import {
  registerAllProcesses,
  registerGeneralProcess,
  updatedStatePlot,
} from "@/core/general-proccess/actions/general-actions";

export interface GeneralProccessState {
  registerGeneralInstance: (
    plot: number,
    crop_type: string,
    documentId: string,
    init_date: string
  ) => Promise<boolean>;
  // Otros estados y métodos del store
}

export const useGenProccessStore = create<GeneralProccessState>()(
  (set, get) => ({
    //* metodo para registrar los datos del proceso general
    registerGeneralInstance: async (
      plot: number,
      crop_type: string,
      documentId: string,
      init_date: string
    ) => {
      // Registro del proceso general
      const generalProcess = await registerGeneralProcess(
        documentId,
        crop_type,
        init_date
      );

      if (!generalProcess) return false;

      // Se extrae el id del proceso general
      const { id } = generalProcess;

      // Registro de los procesos secundarios
      const processesCreated = await registerAllProcesses(id);
      // Aquí puedes actualizar el estado del store si es necesario
      if (processesCreated) {
        const updatePlot = await updatedStatePlot(documentId);
        if (updatePlot) {
          return true;
        }
      }
      return false;
    },
  })
);
