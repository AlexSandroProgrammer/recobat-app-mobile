import { registerEmployee } from "@/core/employees/actions/employees.actions";
import { create } from "zustand";

export interface EmployeeState {
  // metodo de registro
  employeeRegister: (
    document: string,
    names: string,
    surnames: string,
    email: string,
    telephone: string,
    salary: string,
    farmId: string
  ) => Promise<boolean>;
}

// creamos el objeto con zustand
export const useEmployeeStore = create<EmployeeState>()((set, get) => ({
  //* ------ metodo para registrar el lote
  employeeRegister: async (
    document: string,
    names: string,
    surnames: string,
    email: string,
    telephone: string,
    salary: string,
    farmId: string
  ) => {
    // accion para registrar el lote luis@gmail.com
    const resp = await registerEmployee(
      document,
      names,
      surnames,
      email,
      telephone,
      salary,
      farmId
    );
    if (resp) {
      return true;
    }
    return false;
  },
}));
