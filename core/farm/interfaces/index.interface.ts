//--- inicio interfaces para registrar o actualizar una finca
export interface FarmProps {
  data: DataFarmProps;
}
export interface DataFarmProps {
  nameFarm: string;
  address: string;
  latitude: string;
  altitude: string;
  codeFarm: string;
  user: string;
  plots?: string[];
  telephone: string;
  longitude: string;
  locale?: string;
  localizations?: string[];
}
//--- fin interfaces para registrar o actualizar una finca

//--- inicio interfaces para obtener las fincas de un usuario

export interface ListFarmsUserProps {
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
  type_document: null;
  farms: Farm[];
}

export interface Farm {
  id: number;
  documentId: string;
  nameFarm: string;
  latitude: string;
  altitude: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: null;
  address: string;
  codeFarm: string;
  telephone: string;
  longitude: string;
}

//--- fin interfaces para obtener las fincas de un usuario
