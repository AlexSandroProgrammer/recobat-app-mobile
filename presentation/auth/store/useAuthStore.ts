import { create } from "zustand";
import {
  authCheckStatus,
  authLogin,
  authRegister,
  updateUserData,
} from "@/core/auth/actions/auth-actions";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { User } from "@/core/auth/interfaces/index.interface";
// creamos los tipos de estado que puede tener un usuario
export type AuthStatus = "authenticated" | "unauthenticated" | "checking";
// creamos la interfaz del estado del usuario
export interface AuthState {
  // propiedades
  status: AuthStatus;
  jwt?: string;
  user?: User;
  //creamos dos accions para la autenticacion del usuario
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<boolean>;

  updateUser: (
    email: string,
    username: string,
    names: string,
    surnames: string,
    document: string,
    telephone: string,
    typeDocument: string,
    id: number,
    stateData: string
  ) => Promise<boolean>;

  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  // accion para cambiar de estado
  changeStatus: (jwt?: string, user?: User) => Promise<boolean>;
}
// creamos el objeto
export const useAuthStore = create<AuthState>()((set, get) => ({
  // propiedades
  status: "checking",
  jwt: undefined,
  user: undefined,

  // ------------ acciones ----------------
  // accion para cambiar de estado
  changeStatus: async (jwt?: string, user?: User) => {
    if (!jwt || !user) {
      set({ status: "unauthenticated", jwt: undefined, user: undefined });
      await SecureStorageAdapter.removeItem("jwt");
      return false;
    }
    set({
      status: "authenticated",
      jwt: jwt,
      user: user,
    });
    await SecureStorageAdapter.setItem("jwt", jwt);
    return true;
  },

  // accion del login
  login: async (email: string, password: string) => {
    // llamamos la accion para pasarle los datos
    const resp = await authLogin(email, password);
    return get().changeStatus(resp?.jwt, resp?.user);
  },

  // accion del registro
  register: async (username: string, email: string, password: string) => {
    // llamamos la accion para pasarle los datos
    const resp = await authRegister(username, email, password);
    return get().changeStatus(resp?.jwt, resp?.user);
  },

  // accion del login
  updateUser: async (
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
    // llamamos la accion para pasarle los datos
    const resp = await updateUserData(
      email,
      username,
      names,
      surnames,
      document,
      telephone,
      typeDocument,
      id,
      stateData
    );
    //¨* verificamos si todo salio bien
    return resp ? true : false;
  },

  // accion para verificar el estado del usuario
  checkStatus: async () => {
    //* verificamos si el token esta en el secure storage
    const resp = await authCheckStatus();
    get().changeStatus(resp?.jwt, resp?.user);
  },

  // accion para desloguearse
  logout: async () => {
    // borrar el token en el secure storage
    SecureStorageAdapter.removeItem("jwt");
    set({
      status: "unauthenticated",
      jwt: undefined,
      user: undefined,
    });
    return;
  },
}));
