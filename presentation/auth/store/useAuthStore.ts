import { create } from "zustand";
import { User } from "@/core/auth/interface/user";
import {
  authCheckStatus,
  authLogin,
  authRegister,
} from "@/core/actions/auth-actions";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
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
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  // accion para cambiar de estado
  changeStatus: (jwt?: string) => Promise<boolean>;
}
// creamos el objeto
export const useAuthStore = create<AuthState>()((set, get) => ({
  // propiedades
  status: "checking",
  jwt: undefined,
  user: undefined,

  // ------------ acciones ----------------
  // accion para cambiar de estado
  changeStatus: async (jwt?: string) => {
    if (!jwt) {
      set({
        status: "unauthenticated",
        jwt: undefined,
        // user: undefined,
      });
      await SecureStorageAdapter.removeItem("jwt");
      return false;
    }
    set({
      status: "authenticated",
      jwt: jwt,
      // user: user,
    });
    //TODO: guardar el jwt en el secure storage
    await SecureStorageAdapter.setItem("jwt", jwt);
    return true;
  },

  // accion del login
  login: async (email: string, password: string) => {
    // llamamos la accion para pasarle los datos
    const resp = await authLogin(email, password);
    return get().changeStatus(resp?.jwt);
  },

  // accion del login
  register: async (username: string, email: string, password: string) => {
    // llamamos la accion para pasarle los datos
    const resp = await authRegister(username, email, password);
    return get().changeStatus(resp?.jwt);
  },

  // accion para verificar el estado del usuario
  checkStatus: async () => {
    //* verificamos si el token esta en el secure storage
    const resp = await authCheckStatus();
    get().changeStatus(resp?.jwt);
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
