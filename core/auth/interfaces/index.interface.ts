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
  stateData: string;
  typeDocument?: TypeDocuments;
}

// interfaz con los datos iniciales del usuario
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

export enum TypeDocuments {
  TI = "T.I.",
  CC = "C.C.",
}
