// src/components/AlertModal.tsx
import { AlertModalProps } from "@/core/theme/index.interface";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

const AlertModal: React.FC<AlertModalProps> = ({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-primary-100 shadow-slate-500/90 rounded-xl p-6 w-5/6">
          <View className="flex text-center items-center mb-3">
            <Ionicons name="alert-circle-outline" size={80} color="red" />
          </View>

          <Text className="text-2xl font-kanit-bold text-center mb-4">
            {title}
          </Text>
          <Text className="text-base text-center mb-6 font-kanit">
            {message}
          </Text>
          <View className="flex-row justify-around">
            <TouchableOpacity
              onPress={onCancel}
              className="bg-red-500 shadow-md shadow-zinc-300 px-4 py-3 rounded-full"
            >
              <Text className="text-white font-kanit-bold">{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              className="bg-green-500 px-4 py-3 shadow-md shadow-zinc-300 rounded-full"
            >
              <Text className="text-white font-kanit-bold">{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
