import { DataGeneralProcess } from "@/core/general-proccess/interfaces/index.interface";
import { RelativePathString } from "expo-router";

export interface CardProccessProps {
  title?: string | number;
  description?: string;
  route?: RelativePathString;
  id: string;
  documentId?: string;
  idProccess?: string | number;
}

export interface PlotProccessProps {
  data: Plot;
}

export interface Plot {
  id: number;
  documentId: string;
  namePlot: string;
  size: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  status_plot: string;
  general_processes: DataGeneralProcess[];
}
