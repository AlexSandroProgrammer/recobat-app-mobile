import { create } from "zustand";
import { User } from "@/core/auth/interface/user";
// creamos los tipos de estado que puede tener un usuario
export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

//* creamos la interfaz del estado del usuario
export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  //* creamos dos metodos para la autenticacion del usuario
  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

//* creamos el objeto
export const useAuthStore = create<AuthState>()((set, get) => ({
  //* propiedades
  status: "checking",
  token: undefined,
  user: undefined,

  //* metodos
  login: async (email: string, password: string) => {
    return true;
  },
  checkStatus: async () => {},
  logout: async () => {},
}));
