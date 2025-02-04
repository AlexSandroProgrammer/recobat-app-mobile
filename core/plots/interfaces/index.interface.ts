export interface ListPlotsForFarm {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
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
  plots: Plot[];
}

export interface Plot {
  id: number;
  documentId: string;
  namePlot: string;
  size: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
