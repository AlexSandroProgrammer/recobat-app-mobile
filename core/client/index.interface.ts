export interface ButtonGroupProps {
  options: string[];
  selectedOptions: string;
  onSelect: (option: string) => void;
}
