// Representa la respuesta completa de la API
export interface FarmResponse {
  data: Farm;
}

// Representa la información de la finca (incluye las parcelas)
export interface Farm {
  id: number;
  documentId: string;
  nameFarm: string;
  latitude: string;
  altitude: string;
  createdAt: string; // La fecha viene como string
  updatedAt: string;
  publishedAt: string;
  address: string;
  codeFarm: string;
  telephone: string;
  longitude: string;
  plots: Plot[];
}

// Representa cada parcela (plot)
export interface Plot {
  id: number;
  documentId: string;
  namePlot: string;
  size: string;
  status_plot?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
