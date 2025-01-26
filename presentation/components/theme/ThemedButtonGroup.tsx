import { ButtonGroupProps } from "@/core/client/index.interface";
import { View, Text } from "react-native";

const ThemedButtonGroup = ({
  options,
  onSelect,
  selectedOptions,
}: ButtonGroupProps) => {
  return (
    <View>
      <Text>ThemedButtonGroup</Text>
    </View>
  );
};

export default ThemedButtonGroup;
