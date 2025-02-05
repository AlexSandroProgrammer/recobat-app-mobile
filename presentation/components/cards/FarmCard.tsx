import { Farm } from "@/core/farms/interfaces/index.interface";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export const FarmCard = ({
  address,
  codeFarm,
  telephone,
  nameFarm,
  id,
}: Farm) => {
  //* creamos una funcion para eliminar la finca
  const handleDeleteFarm = (id: number) => {
    console.log(`El id recibido es ${id}`);
  };
  return (
    <View
      className={`w-full p-6 rounded-xl shadow-lg bg-primary-300 shadow-green-900/100 relative my-3`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-row items-center content-center">
        <Ionicons name="home-outline" size={24} color="white" />
        <Text className="text-2xl font-kanit-bold text-white">
          {" "}
          {/* colocamos el numero que esta ocupando del arreglo */}
          {nameFarm}
        </Text>
      </View>
      <View className="flex flex-row items-center content-center mt-3">
        <Ionicons name="invert-mode" size={24} color="white" />
        <Text className="text-lg font-kanit text-white"> {codeFarm}</Text>
      </View>
      <View className="flex flex-row items-center content-center mt-2">
        <Ionicons name="location-outline" size={25} color="white" />
        <Text className="text-lg font-kanit text-white">{address}</Text>
      </View>
      <View className="flex flex-row items-center content-center mt-2">
        <Ionicons name="phone-portrait-outline" size={25} color="white" />
        <Text className="text-lg font-kanit text-white">{telephone}</Text>
      </View>

      {/* Footer */}
      <View className="flex flex-row items-end gap-3 justify-center mt-5">
        {/* boton para eliminar un lote */}
        <Link
          href="/"
          onPress={() => handleDeleteFarm(id)}
          className="bg-red-500 shadow-md shadow-zinc-300 rounded-full w-1/6 py-4 text-center "
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="remove-circle-outline" size={25} color="white" />
          </View>
        </Link>
        {/* boton para crear un lote */}
        <Link
          href="/"
          className="bg-green-500 shadow-md shadow-zinc-300 rounded-full w-1/6 py-4 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="add-circle-outline" size={25} color="white" />
          </View>
        </Link>

        {/* boton para crear un lote */}
        <TouchableOpacity
          onPress={() => router.push(`/farm/${id}`)}
          className="bg-yellow-500 shadow-md shadow-zinc-300 rounded-full w-1/6 py-4 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="pencil-outline" size={25} color="white" />
          </View>
        </TouchableOpacity>

        {/* boton para mostrar los lotes de la finca */}
        <Link
          href="/"
          className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-1/6 py-4 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="eye" size={25} color="white" />
          </View>
        </Link>
      </View>
    </View>
  );
};
