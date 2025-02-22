import { CardsItems } from "@/core/client/interfaces/index.interface";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export const CardInfo = ({
  title,
  description,
  icon,
  route,
  bgColor,
}: CardsItems) => {
  return (
    <View
      className={`w-full p-6 rounded-xl bg-red-500 shadow-lg shadow-black/80 relative`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-row items-center content-center">
        <Ionicons name="sad-outline" size={40} color="white" />
        <Text className="text-2xl text-center font-kanit-bold text-slate-100">
          {" "}
          {title}
        </Text>
      </View>

      {/* Contenido Principal */}
      <View className="mt-3">
        <Text className="text-lg font-kanit text-slate-100">{description}</Text>
      </View>

      {/* Footer */}
      <View className="flex flex-row items-end justify-end mt-3">
        <TouchableOpacity
          onPress={() => router.push(route)}
          className="bg-primary-100 shadow-md shadow-zinc-300 rounded-full w-3/6 py-4"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons
              name="arrow-back-circle-outline"
              size={25}
              color="black"
            />
            <Text className="text-lg font-kanit text-black ml-2">Regresar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
