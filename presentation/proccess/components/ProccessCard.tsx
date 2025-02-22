import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { CardProccessProps } from "../interfaces/index.interface";
interface ComponentProps extends CardProccessProps {
  farmId: string;
}
export const ProccessCard = ({
  title,
  documentId,
  id,
  farmId,
}: ComponentProps) => {
  return (
    <View
      className={`w-full p-4 rounded-xl bg-zinc-50 border border-slate-400 shadow-lg shadow-black/80 relative`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-col items-center content-center gap-3">
        <Ionicons name="sync" size={50} color="blue" />
        <Text className="text-2xl text-center font-kanit-bold text-primary-400">
          Proceso No. {title}
        </Text>
      </View>
      {/* Footer */}
      <View className="flex flex-row items-end justify-center mt-3">
        <TouchableOpacity
          onPress={() =>
            router.push(`/proccess/listProccess/${documentId}?farmId=${farmId}`)
          }
          className="bg-primary-200 shadow-md shadow-zinc-300 rounded-xl w-3/6 py-3"
        >
          <View className="flex flex-row items-center justify-center">
            <Text className="text-lg font-kanit-bold text-white ml-2">
              Ver Progreso{" "}
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
