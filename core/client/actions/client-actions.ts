import { recobatApi } from "../../api/recobatApi";
import { User } from "../../auth/interface/user";
import { UserData } from "../../interfaces/index.interface";
import { SecureStorageAdapter } from "../../../helpers/adapters/secure-storage.adapter";

// creamos una funcion para retornar el token y el usuario
const userAuthenticated = (
  data: UserData
): {
  user: User;
} => {
  // extraemos los datos del usuario autenticado
  const {
    id,
    documentId,
    document,
    username,
    email,
    names,
    surnames,
    blocked,
    confirmed,
  } = data;

  const user: User = {
    id,
    documentId,
    document,
    username,
    email,
    names,
    surnames,
    blocked,
    confirmed,
  };

  return {
    user,
  };
};

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
    return userAuthenticated(data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

// TODO: Hacer el registro del usuario
