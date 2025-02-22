export interface FarmEmployeesResponse {
  data: BodyFarmResponse;
}

export interface BodyFarmResponse {
  id: number;
  documentId: string;
  nameFarm: string;
  latitude: string;
  altitude: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  address: string;
  codeFarm: string;
  telephone: string;
  longitude: string;
  employees: Employee[];
}

export interface Employee {
  id: number;
  documentId: string;
  document: null;
  names: string;
  surnames: string;
  email: string;
  telephone: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  salary: string;
}

export interface RegisterEmployeeResponse {
  data: BodyResponseEmployee;
}

export interface BodyResponseEmployee {
  id: number;
  documentId: string;
  document: string;
  names: string;
  surnames: string;
  email: string;
  telephone: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  salary: string;
}
