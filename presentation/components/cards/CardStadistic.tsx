import { CardsItems } from "@/core/client/interfaces/index.interface";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export const CardStadistic = ({
  title,
  description,
  icon,
  bgColor,
  route,
}: CardsItems) => {
  return (
    <View
      className={`w-full p-6 rounded-xl ${bgColor} shadow-lg shadow-black/80 relative`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-row items-center content-center">
        <Ionicons
          name={icon as keyof typeof Ionicons.glyphMap}
          size={24}
          color="white"
        />
        <Text className="text-2xl font-kanit-bold text-slate-100">
          {" "}
          {title}
        </Text>
      </View>

      {/* Contenido Principal */}
      <View className="mt-3">
        <Text className="text-lg font-kanit text-slate-100">{description}</Text>
        {/* Estadísticas */}
        <View className="flex flex-row mt-3">
          <View className="flex items-center">
            <Text className="text-xl font-kanit text-slate-100">
              120 {title}
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="flex flex-row items-end justify-end mt-3">
        <TouchableOpacity
          onPress={() => router.push(route)}
          className="bg-primary-100 shadow-md shadow-zinc-300 rounded-full w-3/6 py-4"
        >
          <View className="flex flex-row items-center justify-center">
            <Text className="text-lg font-kanit text-black ml-2">Mirar</Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={25}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
