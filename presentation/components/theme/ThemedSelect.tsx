// ThemedSelect.tsx
import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedSelectProps } from "../../../core/theme/index.interface";
import SelectModal from "../modals/SelectModal";

const ThemedSelect: React.FC<ThemedSelectProps> = ({
  data,
  selectedValue,
  onValueChange,
  iconRef,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {/* Botón del select */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex flex-row items-center justify-between w-full px-4 rounded-lg border border-primary-300 bg-primary-100 mt-5 py-5"
      >
        <View className="flex flex-row items-center justify-start">
          {iconRef && (
            <Ionicons
              name={iconRef}
              size={20}
              color="#273d88"
              style={{ marginRight: 5 }}
            />
          )}
          <Text className="text-sm font-rubik text-black-300 ml-2 flex-1">
            {selectedValue ? selectedValue.label : placeholder}
          </Text>
          <Ionicons
            name="chevron-down"
            size={20}
            style={{ marginLeft: 5 }}
            color="#273d88"
          />
        </View>
      </TouchableOpacity>

      {/* Modal con las opciones */}
      <SelectModal
        visible={modalVisible}
        data={data}
        onSelect={(item) => {
          onValueChange(item);
          setModalVisible(false);
        }}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default ThemedSelect;
