import { Ionicons } from "@expo/vector-icons";

// Definimos la interfaz para cada elemento del select
export interface SelectItem {
  label: string;
  value: string | number;
  altitudeCropType?: string;
  salaryEmployee?: string;
}

// Propiedades del componente ThemedSelect
export interface ThemedSelectProps {
  data: SelectItem[];
  selectedValue?: SelectItem;
  onValueChange: (item: SelectItem) => void;
  iconRef?: keyof typeof Ionicons.glyphMap;
  placeholder?: string;
}

// propiedas del componente SelectModal
export interface SelectModalProps {
  visible: boolean;
  data: SelectItem[];
  onSelect: (item: SelectItem) => void;
  onClose: () => void;
}

export interface AlertModalProps {
  visible: boolean;
  title: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}
