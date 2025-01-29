export interface FarmProps {
  data: DataFarmProps;
}

export interface DataFarmProps {
  nameFarm: string;
  address: string;
  latitude: string;
  altitude: string;
  codeFarm: string;
  user: string;
  plots?: string[];
  telephone: string;
  longitude: string;
  locale?: string;
  localizations?: string[];
}
