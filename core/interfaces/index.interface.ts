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
}
