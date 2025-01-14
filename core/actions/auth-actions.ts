import { recobatApi } from "../api/recobatApi";
import { User } from "../auth/interface/user";

// interfaz con los datos del usuario
export interface UserData {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  names: string;
  surnames: string;
  document: string;
  telephone: string;
}
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

export const authCheckStatus = async () => {
  try {
    const { data } = await recobatApi.get<AuthResponse>("/users/me");
    return returnUserAndToken(data);
  } catch (error) {
    console.error(error);
    console.log("entro en el catch");
    // throw new Error("Error al momento de verificar el estado de la sesion");
    return null;
  }
};

// TODO: Hacer el registro del usuario
