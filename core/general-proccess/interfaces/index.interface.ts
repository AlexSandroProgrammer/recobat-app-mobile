export interface BodyGeneralProcess {
  data: DataGeneralProcess;
}

export interface DataGeneralProcess {
  id: number;
  documentId: string;
  init_date: Date;
  end_date: null;
  status_crop: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface BodyConditioningProcess {
  data: DataConditioning;
}

export interface DataConditioning {
  id: number;
  documentId: string;
  status_conditioning?: string;
  status_diesease_control?: string;
  status_fertilization?: string;
  status_jobs_subproccess?: string;
  status_control_quimic?: string;
  status_organic_control?: string;
  status_soils_analyti?: string;
  status_weed_control?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
