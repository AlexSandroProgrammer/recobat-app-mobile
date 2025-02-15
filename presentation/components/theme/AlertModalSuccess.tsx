// src/components/AlertModalSuccess.tsx
import { AlertModalProps } from "@/core/theme/index.interface";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
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
  const { user } = useAuthStore();
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

          <Text className="text-2xl font-kanit-bold text-center mb-3">
            {`¡${title} ${user?.names}!`}
          </Text>
          <Text className="text-md text-justify mb-2 font-kanit">
            {message}
          </Text>
          <View className="flex-row justify-center content-center text-center">
            <TouchableOpacity
              onPress={onConfirm}
              className="bg-green-500 w-4/6 py-5 shadow-md shadow-zinc-300 rounded-full"
            >
              <Text className="text-white font-kanit-bold text-center">
                {confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModalSuccess;
