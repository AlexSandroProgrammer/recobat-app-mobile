import { recobatApi } from "@/core/api/recobatApi";
import {
  FarmEmployeesResponse,
  RegisterEmployeeResponse,
} from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getEmployees = async (farmId: string) => {
  try {
    const { data } = await recobatApi.get<FarmEmployeesResponse>(
      `/farms/${farmId}?populate=employees`
    );
    return data?.data;
  } catch (error) {
    throw new Error("Error al momento de obtener los datos de la finca");
  }
};

export const registerEmployee = async (
  document: string,
  names: string,
  surnames: string,
  email: string,
  telephone: string,
  salary: string,
  farmId: string
) => {
  try {
    const { data } = await recobatApi.post<RegisterEmployeeResponse>(
      "/employees",
      {
        data: {
          document,
          names,
          surnames,
          email,
          telephone,
          salary,
          farms: [farmId],
        },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    // throw new Error("Error al momento de iniciar sesion");
    return null;
  }
};
