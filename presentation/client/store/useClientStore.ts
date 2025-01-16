import { create } from "zustand";
import { User } from "@/core/auth/interface/user";
import { getUserData } from "@/core/actions/client-actions";
// creamos los tipos de estado que puede tener un usuario
export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

// creamos la interfaz del estado del usuario
export interface ClientState {
  // metodos
  userAuthenticated: () => Promise<{}>;
}
// creamos el objeto
export const useClientStore = create<ClientState>()((set, get) => ({
  // ------------ acciones ----------------
  // accion para cambiar de estado
  // ------------ acciones ----------------
  userAuthenticated: async () => {
    try {
      const response = await getUserData(); // Llamar a getUserData
      return response || {}; // Devolver el resultado o un objeto vacío
    } catch (error) {
      console.error("Error en userAuthenticated:", error);
      return {}; // Retornar un objeto vacío en caso de error
    }
  },
}));
