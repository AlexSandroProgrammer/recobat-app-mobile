import { User } from "../auth/interface/user";

export interface AuthResponse {
  jwt: string;
  user: UserData;
}

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

//* creamos una funcion para retornar el token y el usuario

const returnUserAndToken = (data: AuthResponse) => {
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
