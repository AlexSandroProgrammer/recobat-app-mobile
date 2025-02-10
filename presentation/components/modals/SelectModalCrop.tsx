// SelectModal.tsx
import React from "react";
import { Modal, TouchableOpacity, FlatList, View, Text } from "react-native";
import { SelectModalProps } from "@/core/theme/index.interface";

const SelectModalCrop: React.FC<SelectModalProps> = ({
  visible,
  data,
  onSelect,
  onClose,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "flex-end",
        }}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View className="bg-white rounded-t-lg p-4">
          <FlatList
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onSelect(item)}
                className="p-4 border-b border-gray-200"
              >
                <Text className="text-lg font-kanit text-primary-400">
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default SelectModalCrop;
