import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { CardProccessProps } from "../interfaces/index.interface";

export const ConditioningCard = ({ title, description }: CardProccessProps) => {
  return (
    <View
      className={`w-full p-4 rounded-xl bg-slate-100 shadow-lg shadow-black/80 relative`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-col items-center content-center gap-3">
        <Ionicons name="aperture" size={50} color="blue" />
        <Text className="text-2xl text-center font-kanit-bold text-primary-400">
          Proceso No. 1
        </Text>
        <Text className="text-2xl text-center font-kanit-bold text-primary-400">
          {title}
        </Text>
      </View>
      <View className="flex flex-col items-center content-center mt-2">
        <Text className="text-lg text-left font-kanit text-primary-400">
          {description}
        </Text>
      </View>
      {/* Footer */}
      <View className="flex flex-row items-end justify-center mt-3">
        <TouchableOpacity
          onPress={() => router.push("/")}
          className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-3/6 py-4"
        >
          <View className="flex flex-row items-center justify-center">
            <Text className="text-lg font-kanit-bold text-white ml-2">
              Iniciar{" "}
            </Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={25}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
