import { Farm } from "@/core/farms/interfaces/index.interface";

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
  data: Data;
}

export interface Data {
  id: number;
  documentId: string;
  namePlot: string;
  size: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  farm: Farm;
}
