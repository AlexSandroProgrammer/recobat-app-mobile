import { Farm } from "@/core/farms/interfaces/index.interface";
import { SelectItem } from "@/core/theme/index.interface";

// interfaz para devolver el listado de cultivos transitorios
export interface ListTransitionalCrop {
  data: TransitionalCrop[];
}

export interface TransitionalCrop {
  createdAt: Date;
  documentId: string;
  id: number;
  nameCrop: string;
  publishedAt: Date;
  updatedAt: Date;
}

export interface FormVerificationCropProps {
  id: number;
  filteredTransitional: FilteredTransitionalCrops[];
}

export interface FilteredTransitionalCrops {
  label: string;
  value: number;
}

export interface FarmForPlot {
  data: DataFarmForPlot;
}

export interface DataFarmForPlot {
  id: number;
  documentId: string;
  namePlot: string;
  size: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  farm: Farm;
}

// ------- INTERFAZ PARA DEVOLVER LOS TIPOS DE CULTIVO ------

export interface CropTypesProps {
  data: Data;
}

export interface Data {
  id: number;
  documentId: string;
  nameCrop: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  crop_types?: DataCropType[];
  altitude?: string;
}

export interface DataCropType {
  id: number;
  documentId: string;
  nameCrop: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  altitude?: string;
}

// Interfaz para las props del formulario
export interface InitialCropFormProps {
  id: string;
  cropOptions: SelectItem[];
  farmPlot: DataFarmForPlot;
}
