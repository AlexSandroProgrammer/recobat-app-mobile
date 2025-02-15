import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import { Ionicons } from "@expo/vector-icons";

interface ThemedDatePickerProps {
  value?: string; // Fecha en formato "YYYY-MM-DD"
  onChange: (date: string) => void;
  iconRef?: keyof typeof Ionicons.glyphMap;
  placeholder?: string;
}

const ThemedDatePicker: React.FC<ThemedDatePickerProps> = ({
  value,
  onChange,
  iconRef,
  placeholder,
}) => {
  const [visible, setVisible] = useState(false);

  const handleConfirm = ({ date }: { date: Date | undefined }) => {
    setVisible(false);
    if (date) {
      // Formateamos la fecha en formato YYYY-MM-DD
      const formattedDate = date.toISOString().split("T")[0];
      onChange(formattedDate);
    }
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="flex flex-row items-center justify-between w-full px-4 rounded-lg border border-primary-300 bg-primary-100 mt-5 py-5"
      >
        <View className="flex flex-row items-center">
          {iconRef && (
            <Ionicons
              name={iconRef}
              size={20}
              color="#273d88"
              style={{ marginRight: 5 }}
            />
          )}
          <Text
            className="text-base font-kanit text-black-300 ml-2"
            style={{ color: "#1b2550" }}
          >
            {value ? `Fecha Inicial: ${value}` : placeholder}
          </Text>
        </View>
      </TouchableOpacity>

      <DatePickerModal
        mode="single"
        visible={visible}
        onDismiss={handleDismiss}
        date={value ? new Date(value) : new Date()}
        onConfirm={handleConfirm}
        locale="es"
        animationType="fade"
      />
    </View>
  );
};

export default ThemedDatePicker;
