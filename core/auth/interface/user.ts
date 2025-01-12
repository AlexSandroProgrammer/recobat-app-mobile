//* creamos el interface que tendra los datos del usuario
export interface User {
  id: number;
  documentId: string;
  email: string;
  names: string;
  surnames: string;
  document: string;
  username: string;
  blocked?: boolean;
  confirmed?: boolean;
}
