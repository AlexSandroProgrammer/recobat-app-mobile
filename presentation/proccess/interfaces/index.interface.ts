import { DataGeneralProcess } from "@/core/general-proccess/interfaces/index.interface";
import { ConditioningSubDetail } from "@/core/proccess/interfaces/index.interface";
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

export interface CardSubProccessProps {
  title?: string | number;
  description?: string;
  conditioning_sub_details?: ConditioningSubDetail[];
  job_sub_proccess_details?: ConditioningSubDetail[];
  soils_analysis_details?: ConditioningSubDetail[];
  fertilization_proccesses?: ConditioningSubDetail[];
  pest_control_proccesses?: ConditioningSubDetail[];
  pest_organic_proccesses?: ConditioningSubDetail[];
  weed_control_proccesses?: ConditioningSubDetail[];
  disease_control_proccesses?: ConditioningSubDetail[];
  farmId?: string;
}
