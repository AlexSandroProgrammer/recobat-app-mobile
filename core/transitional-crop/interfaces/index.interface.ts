export interface ListTransitionalCrop {
  data: TransitionalCrop[];
}

export interface TransitionalCrop {
  id: number;
  documentId: string;
  nameCrop: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}
