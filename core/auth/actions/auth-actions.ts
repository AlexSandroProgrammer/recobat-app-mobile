import { recobatApi } from "../../api/recobatApi";
import { SecureStorageAdapter } from "../../../helpers/adapters/secure-storage.adapter";
import { User, UserData } from "../interfaces/index.interface";

// interfaz con los datos del token y el usuario
export interface AuthResponse {
  jwt: string;
  user: UserData;
}

// creamos una funcion para retornar el token y el usuario
const returnUserAndToken = (
  data: AuthResponse
): {
  user: User;
  jwt: string;
} => {
  // extraemos los datos del usuario y el token de la respuesta
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
  } = data.user;
  const { jwt } = data;

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
    jwt,
  };
};

//* creamos una funcion para el login del usuario

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();
  try {
    const { data } = await recobatApi.post<AuthResponse>("/auth/local", {
      identifier: email,
      password,
    });
    return returnUserAndToken(data);
  } catch (error) {
    console.error(error);
    // throw new Error("Error al momento de iniciar sesion");
    return null;
  }
};

//* creamos una funcion para el login del usuario

export const authRegister = async (
  username: string,
  email: string,
  password: string
) => {
  email = email.toLowerCase();
  try {
    const { data } = await recobatApi.post<AuthResponse>(
      "/auth/local/register",
      {
        username,
        email,
        password,
      }
    );
    return returnUserAndToken(data);
  } catch (error) {
    console.error(error);
    // throw new Error("Error al momento de iniciar sesion");
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const jwt = await SecureStorageAdapter.getItem("jwt");
    return {
      jwt,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

// TODO: Hacer el registro del usuario
