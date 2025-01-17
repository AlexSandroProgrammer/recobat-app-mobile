import { recobatApi } from "../../api/recobatApi";
import { UserData } from "../../interfaces/index.interface";

//* creamos una funcion para llamar los datos del usuario autenticado

export const getUserData = async (jwt: string) => {
  try {
    const { data } = await recobatApi.get<UserData>("/users/me", {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// TODO: Hacer el registro del usuario
