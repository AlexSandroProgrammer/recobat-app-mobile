export interface UserDataJwt {
  jwt: string;
  user: User;
}

export interface User {
  id: number;
  documentId?: string;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  names: null;
  surnames: null;
  document: null;
  telephone: null;
  stateData: null;
  type_document?: null;
}

export enum TypeDocuments {
  TI = "T.I.",
  CC = "C.C.",
}
