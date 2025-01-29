import { RelativePathString } from "expo-router";

export interface ButtonGroupProps {
  options: string[];
  selectedOptions: string;
  onSelect: (option: string) => void;
}

export interface CardsItems {
  title: string;
  description: string;
  icon: string;
  route: string;
  bgColor?: any;
}

export interface DropProfileProps {
  title: string;
  titleButton: string;
  routeModal: RelativePathString;
}
