import { recobatApi } from "../../api/recobatApi";
import { User } from "../../auth/interface/user";
import { UserData } from "../../interfaces/index.interface";
import { SecureStorageAdapter } from "../../../helpers/adapters/secure-storage.adapter";

//* creamos una funcion para llamar los datos del usuario autenticado

export const getUserData = async () => {
  try {
    const jwt = await SecureStorageAdapter.getItem("jwt");
    if (!jwt) {
      return null;
    }
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
