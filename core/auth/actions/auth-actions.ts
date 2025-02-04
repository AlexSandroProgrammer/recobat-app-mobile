import { recobatApi } from "../../api/recobatApi";
import { SecureStorageAdapter } from "../../../helpers/adapters/secure-storage.adapter";
import { User, UserDataJwt } from "../interfaces/index.interface";

// creamos una funcion para retornar el token y el usuario
const returnUserAndToken = (
  data: UserDataJwt
): {
  user: User;
  jwt: string;
} => {
  // extraemos los datos del usuario y el token de la respuesta
  const {
    id,
    username,
    email,
    names,
    surnames,
    document,
    telephone,
    stateData,
    type_document,
  } = data.user;
  const { jwt } = data;

  const user: User = {
    id,
    username,
    email,
    names,
    surnames,
    document,
    telephone,
    stateData,
    type_document,
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
    const { data } = await recobatApi.post<UserDataJwt>("/auth/local", {
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
    const { data } = await recobatApi.post<UserDataJwt>(
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
    const jwt = (await SecureStorageAdapter.getItem("jwt")) as string;
    console.log(jwt);
    const { data } = await recobatApi.get<User>("/users/me", {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    //* creamos una variable que devuelva la data y el jwt
    const dataresponse: UserDataJwt = {
      jwt,
      user: data,
    };
    return returnUserAndToken(dataresponse);
  } catch (error) {
    console.error(error);
    return null;
  }
};

//* creamos un metodo para actualizar los datos del usuario
export const updateUserData = async (
  email: string,
  username: string,
  names: string,
  surnames: string,
  document: string,
  telephone: string,
  typeDocument: string,
  id: number,
  stateData: string
) => {
  try {
    const jwt = await SecureStorageAdapter.getItem("jwt");
    const { data } = await recobatApi.put<User>(
      `/users/${id}`,
      {
        email,
        username,
        names,
        surnames,
        document,
        telephone,
        typeDocument,
        stateData,
      },
      {
        headers: { Authorization: `Bearer ${jwt}` },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    // throw new Error("Error al actualizar los datos del usuario");
    return null;
  }
};
