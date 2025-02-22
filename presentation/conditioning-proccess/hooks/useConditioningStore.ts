import { registerConditioningActivity } from "@/core/conditioning/actiones/conditioning.actions";
import { create } from "zustand";

export interface ConditioningState {
  // metodo de registro
  conditioningRegisterProccess: (
    employee: string,
    salary: string,
    register_date: string,
    type_conditioning: string,
    idConditioningProcces: string
  ) => Promise<boolean>;
}

// creamos el objeto con zustand
export const useConditioningStore = create<ConditioningState>()((set, get) => ({
  //* ------ metodo para registrar los datos de la actividad de acondicionamiento
  conditioningRegisterProccess: async (
    employee: string,
    salary: string,
    register_date: string,
    type_conditioning: string,
    idConditioningProcces: string
  ) => {
    // accion para registrar el lote luis@gmail.com
    const resp = await registerConditioningActivity(
      employee,
      salary,
      register_date,
      type_conditioning,
      idConditioningProcces
    );
    if (resp) {
      return true;
    }
    return false;
  },
}));
