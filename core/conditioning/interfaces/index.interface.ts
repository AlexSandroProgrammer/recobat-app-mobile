import { SelectItem } from "@/core/theme/index.interface";

// Interfaz para las props del formulario
export interface InitialConditioningCrops {
  id: string;
  employeesOptions: SelectItem[];
  conditioningsOptions: SelectItem[];
}

export interface ListTypesConditioning {
  data: TypeConditioning[];
}

export interface TypeConditioning {
  id: number;
  documentId: string;
  nameConditioning: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
