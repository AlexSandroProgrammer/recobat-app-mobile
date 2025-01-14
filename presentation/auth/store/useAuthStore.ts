import { create } from "zustand";
import { User } from "@/core/auth/interface/user";
import { authCheckStatus, authLogin } from "@/core/actions/auth-actions";
// creamos los tipos de estado que puede tener un usuario
export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

// creamos la interfaz del estado del usuario
export interface AuthState {
  // propiedades
  status: AuthStatus;
  jwt?: string;
  user?: User;
  //creamos dos metodos para la autenticacion del usuario
  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  // metodo para cambiar de estado
  changeStatus: (jwt?: string, user?: User) => boolean;
}

// creamos el objeto
export const useAuthStore = create<AuthState>()((set, get) => ({
  // propiedades
  status: "checking",
  jwt: undefined,
  user: undefined,

  // ------------ acciones ----------------
  // metodo para cambiar de estado
  changeStatus: (jwt?: string, user?: User) => {
    if (!jwt || !user) {
      set({
        status: "unauthenticated",
        jwt: undefined,
        user: undefined,
      });
      return false;
    }
    set({
      status: "authenticated",
      jwt: jwt,
      user: user,
    });
    //TODO: guardar el jwt en el secure storage
    return true;
  },

  // metodo del login
  login: async (email: string, password: string) => {
    // llamamos la accion para pasarle los datos
    const resp = await authLogin(email, password);
    return get().changeStatus(resp?.jwt, resp?.user);
  },

  // metodo para verificar el estado del usuario
  checkStatus: async () => {
    //* verificamos si el token esta en el secure storage
    const resp = await authCheckStatus();
    get().changeStatus(resp?.jwt, resp?.user);
  },

  // metodo para desloguearse
  logout: async () => {
    // TODO: borrar el token en el secure storage
    set({
      status: "unauthenticated",
      jwt: undefined,
      user: undefined,
    });
    return;
  },
}));
