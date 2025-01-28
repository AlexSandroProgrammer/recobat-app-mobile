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
