import { recobatApi } from "@/core/api/recobatApi";
import { FarmEmployeesResponse } from "../interfaces/index.interface";

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

// accion para registrar los datos del empleado

// export const authRegister = async (
//   username: string,
//   email: string,
//   password: string
// ) => {
//   email = email.toLowerCase();
//   try {
//     const { data } = await recobatApi.post<>(
//       "/auth/local/register",
//       {
//         username,
//         email,
//         password,
//       }
//     );
//   } catch (error) {
//     console.error(error);
//     // throw new Error("Error al momento de iniciar sesion");
//     return null;
//   }
// };
