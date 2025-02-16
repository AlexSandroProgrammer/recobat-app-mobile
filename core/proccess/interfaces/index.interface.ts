export interface ResponseProccessAll {
  data: BodyResponse;
}

export interface BodyResponse {
  id: number;
  documentId: string;
  init_date: Date;
  end_date: null;
  status_crop: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  plots: Plot[];
  crop_types: CropType[];
  conditioning_sub_details: ConditioningSubDetail[];
  job_sub_proccess_details: ConditioningSubDetail[];
  soils_analysis_details: ConditioningSubDetail[];
  fertilization_proccesses: ConditioningSubDetail[];
  pest_control_proccesses: ConditioningSubDetail[];
  pest_organic_proccesses: ConditioningSubDetail[];
  weed_control_proccesses: ConditioningSubDetail[];
  disease_control_proccesses: ConditioningSubDetail[];
}

export interface ConditioningSubDetail {
  id: number;
  documentId: string;
  status_conditioning?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  status_diesease_control?: string;
  status_fertilization?: string;
  status_jobs_subproccess?: string;
  status_control_quimic?: string;
  status_organic_control?: string;
  status_soils_analyti?: string;
  status_weed_control?: string;
}

export interface CropType {
  id: number;
  documentId: string;
  nameCrop: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  altitude: string;
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
}
