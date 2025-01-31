import { Farm } from "@/core/farm/interfaces/index.interface";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

interface Props {
  farm: Farm;
}
export const FarmCard = ({ farm }: Props) => {
  return (
    <View
      className={`w-full p-6 rounded-xl shadow-lg bg-slate-200 shadow-black/80 relative`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-row items-center content-center">
        <Ionicons name="home-outline" size={24} color="blue-dark" />
        <Text className="text-2xl font-kanit-bold text-primary-400">
          {" "}
          {/* colocamos el numero que esta ocupando del arreglo */}
        </Text>
      </View>
      <View className="flex flex-row items-center content-center mt-3">
        <Ionicons name="invert-mode" size={24} color="blue-dark" />
        <Text className="text-lg font-kanit-bold text-primary-400"> </Text>
      </View>
      <View className="flex flex-row items-center content-center mt-2">
        <Ionicons name="location-outline" size={25} color="blue-dark" />
        <Text className="text-lg font-kanit-bold text-primary-400"></Text>
      </View>
      <View className="flex flex-row items-center content-center mt-2">
        <Ionicons name="phone-portrait-outline" size={25} color="blue-dark" />
        <Text className="text-lg font-kanit-bold text-primary-400"></Text>
      </View>

      {/* Footer */}
      <View className="flex flex-row items-end gap-3 justify-center mt-5">
        {/* boton para eliminar un lote */}
        <Link
          href="/"
          className="bg-red-500 shadow-md shadow-zinc-300 rounded-full w-2/6 py-4 text-center "
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="remove-circle-outline" size={25} color="white" />
            <Text className="text-lg font-kanit text-white ml-2"> Borrar</Text>
          </View>
        </Link>
        {/* boton para crear un lote */}
        <Link
          href="/"
          className="bg-green-500 shadow-md shadow-zinc-300 rounded-full w-2/6 py-4 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="add-circle-outline" size={25} color="white" />
            <Text className="text-lg font-kanit text-white ml-2"> Lote</Text>
          </View>
        </Link>
        {/* boton para mostrar los lotes de la finca */}
        <Link
          href="/"
          className="bg-primary-300 shadow-md shadow-zinc-300 rounded-full w-2/6 py-4 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="eye" size={25} color="white" />
            <Text className="text-lg font-kanit text-white ml-2"> Lotes</Text>
          </View>
        </Link>
      </View>
    </View>
  );
};
