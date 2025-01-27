import { ButtonGroupProps } from "@/core/client/interfaces/index.interface";
import { View, Text, TouchableOpacity } from "react-native";

const ThemedButtonGroup = ({
  options,
  onSelect,
  selectedOptions,
}: ButtonGroupProps) => {
  return (
    <View className="flex-1 flex-row content-center items-center">
      {options.map((option) => {
        const isSelected = selectedOptions === option; // Cambiado para comparar directamente
        return (
          <TouchableOpacity
            className={`flex-1 p-7 rounded-lg items-center content-center font-kanit font-medium ${
              isSelected
                ? "bg-primary-100 border border-primary-300"
                : "bg-transparent"
            }`}
            onPress={() => onSelect(option)}
            key={option}
          >
            <Text className="text-black">{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ThemedButtonGroup;
