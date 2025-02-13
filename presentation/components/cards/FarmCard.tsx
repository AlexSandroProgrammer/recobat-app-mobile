import { Farm } from "@/core/farms/interfaces/index.interface";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export const FarmCard = ({
  address,
  codeFarm,
  telephone,
  nameFarm,
  id,
  documentId,
}: Farm) => {
  const blueDark = "#1b2550";
  //* creamos una funcion para eliminar la finca
  const handleDeleteFarm = (documentId: string) => {
    console.log(`El id recibido es ${documentId}`);
  };
  return (
    <View
      className={`w-full p-6 rounded-xl shadow-lg bg-zinc-50 shadow-slate-500/90 border border-slate-300 relative mb-6`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-row items-center content-center">
        <Ionicons name="home-outline" size={24} color={blueDark} />
        <Text className="text-2xl font-kanit-bold text-primary-400">
          {" "}
          {nameFarm}
        </Text>
      </View>
      <View className="flex flex-row items-center content-center mt-3">
        <Ionicons name="invert-mode" size={24} color={blueDark} />
        <Text className="text-lg font-kanit text-primary-400"> {codeFarm}</Text>
      </View>
      <View className="flex flex-row items-center content-center mt-2">
        <Ionicons name="location-outline" size={25} color={blueDark} />
        <Text className="text-lg font-kanit text-primary-400">{address}</Text>
      </View>
      <View className="flex flex-row items-center content-center mt-2">
        <Ionicons name="phone-portrait-outline" size={25} color={blueDark} />
        <Text className="text-lg font-kanit text-primary-400">{telephone}</Text>
      </View>

      {/* Footer */}
      <View className="flex flex-row items-end gap-3 justify-center mt-5">
        {/* boton para eliminar un lote */}
        {/* <Link
          href="/"
          onPress={() => handleDeleteFarm(documentId!)}
          className="bg-red-500 shadow-md shadow-zinc-300 rounded-full w-1/6 py-4 text-center "
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="remove-circle-outline" size={26} color="white" />
          </View>
        </Link> */}
        {/* boton para crear un lote */}

        {/* boton para crear un lote */}
        {/* <TouchableOpacity
          onPress={() => router.push(`/farm/${documentId}`)}
          className="bg-yellow-500 shadow-md shadow-zinc-300 rounded-full w-1/6 py-4 text-center"
          >
          <View className="flex flex-row items-center justify-center">
          <Ionicons name="pencil-outline" size={26} color="white" />
          </View>
          </TouchableOpacity> */}

        {/* boton para crear un lote */}
        <TouchableOpacity
          onPress={() => router.push(`/farm/plots/${id}`)}
          className="bg-green-500 shadow-md shadow-zinc-300 rounded-full w-2/6 py-4 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="add-circle-outline" size={26} color="white" />
            <Text className="text-lg font-kanit-bold text-white"> Lote</Text>
          </View>
        </TouchableOpacity>
        {/* boton para mostrar los lotes de la finca */}
        <TouchableOpacity
          onPress={() => router.push(`/farm/listPlot/${documentId}`)}
          className="bg-primary-300 shadow-md shadow-zinc-300 rounded-full w-2/6 py-4 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="eye-outline" size={26} color="white" />
            <Text className="text-lg font-kanit-bold text-white"> Lotes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
