import { registerPlot } from "@/core/plots/actions/plots.actions";
import { create } from "zustand";

export interface PlotState {
  // metodo de registro
  plotRegister: (
    namePlot: string,
    size: string,
    farmId: string
  ) => Promise<boolean>;
}

// creamos el objeto con zustand
export const usePlotStore = create<PlotState>()((set, get) => ({
  //* ------ metodo para registrar el lote
  plotRegister: async (namePlot: string, size: string, farmId: string) => {
    // accion para registrar el lote
    const resp = await registerPlot(namePlot, size, farmId);
    if (resp) {
      return true;
    }
    return false;
  },
}));
