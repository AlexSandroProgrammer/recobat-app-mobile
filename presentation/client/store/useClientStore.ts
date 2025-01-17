import { create } from "zustand";
import { User } from "@/core/auth/interface/user";
import { getUserData } from "@/core/client/actions/client-actions";
import { UserData } from "@/core/interfaces/index.interface";
// creamos los tipos de estado que puede tener un usuario
export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

// creamos la interfaz del estado del usuario
export interface ClientState {
  // metodos
  userAuthenticated: () => Promise<UserData>;
}
// creamos el objeto
export const useClientStore = create<ClientState>()((set, get) => ({
  // ------------ acciones ----------------
  // accion para cambiar de estado
  // ------------ acciones ----------------
  userAuthenticated: async (): Promise<UserData> => {
    try {
      await getUserData(); // Llamar a getUserData
    } catch (error) {
      console.error("Error en userAuthenticated:", error);
    }
  },
}));
