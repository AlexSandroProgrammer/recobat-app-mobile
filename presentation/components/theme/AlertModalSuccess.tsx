// src/components/AlertModalSuccess.tsx
import { AlertModalProps } from "@/core/theme/index.interface";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

const AlertModalSuccess: React.FC<AlertModalProps> = ({
  visible,
  title,
  message,
  onConfirm,
  confirmText,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-primary-100 shadow-slate-500/90 rounded-xl p-6 w-5/6">
          <View className="flex text-center items-center mb-3">
            <Ionicons
              name="checkmark-done-circle-outline"
              size={80}
              color="green"
            />
          </View>

          <Text className="text-2xl font-bold text-center mb-4">{title}</Text>
          <Text className="text-base text-center mb-6">{message}</Text>
          <View className="flex-row justify-center content-center text-center">
            <TouchableOpacity
              onPress={onConfirm}
              className="bg-green-500 px-4 py-3 shadow-md shadow-zinc-300 rounded-full"
            >
              <Text className="text-white font-semibold">{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModalSuccess;
