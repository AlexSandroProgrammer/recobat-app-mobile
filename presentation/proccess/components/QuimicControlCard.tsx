import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { CardSubProccessProps } from "../interfaces/index.interface";

export const QuimicControlCard = ({
  title,
  description,
  fertilization_proccesses: fertilizationProccess,
  pest_control_proccesses: pestControlProccess,
}: CardSubProccessProps) => {
  const firstFertilization = fertilizationProccess
    ? fertilizationProccess[0]
    : null;

  const firstPestControl = pestControlProccess ? pestControlProccess[0] : null;
  return (
    <View
      className={`w-full p-4 rounded-xl bg-zinc-50 shadow-lg border border-slate-400 shadow-black/80 relative`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-col items-center content-center gap-3">
        <Ionicons name="aperture" size={50} color="blue" />
        <Text className="text-2xl text-center font-kanit-bold text-primary-400">
          Proceso No. 5
        </Text>
        <Text className="text-xl text-center font-kanit-bold uppercase text-primary-400">
          {title}
        </Text>
      </View>
      <View className="flex flex-col items-center content-center mt-2">
        <Text className="text-lg text-left font-kanit text-primary-400">
          {description}
        </Text>
      </View>
      {
        //* validamos si el proceso esta habilitado para iniciar
      }
      {/* Footer */}
      <View className="flex flex-row items-end justify-center mt-3">
        {firstFertilization?.status_fertilization === "finish" &&
        firstPestControl?.status_organic_control === "enabled" ? (
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
        ) : (
          <TouchableOpacity
            disabled={true}
            onPress={() => router.push("/")}
            className="bg-green-500 shadow-md shadow-zinc-300 rounded-full w-3/6 py-4"
          >
            <View className="flex flex-row items-center justify-center">
              <Text className="text-lg font-kanit-bold text-white ml-2">
                Por Iniciar{" "}
              </Text>
              <Ionicons
                name="information-circle-outline"
                size={25}
                color="white"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
