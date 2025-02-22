import { Employee } from "@/core/employees/interfaces/index.interface";
import { Farm } from "@/core/farms/interfaces/index.interface";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export const EmployeeCard = ({
  documentId,
  id,
  document,
  names,
  email,
  telephone,
  surnames,
  salary,
}: Employee) => {
  const blueDark = "#1b2550";
  //* creamos una funcion para eliminar la finca
  const handleDeleteFarm = (documentId: string) => {
    console.log(`El id recibido es ${documentId}`);
  };
  return (
    <View
      className={`w-full p-6 rounded-xl shadow-lg bg-zinc-50 shadow-slate-500/90 border border-slate-400 relative mb-6`}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-row justify-center">
        <Ionicons name="person-circle-outline" size={70} color={blueDark} />
      </View>
      <View className="flex flex-row items-center content-center">
        <Text className="text-xl text-primary-400">
          <Text className="font-kanit-bold">Documento: </Text>
          {document}
        </Text>
      </View>
      <View className="flex flex-row items-center content-center">
        <Text className="text-xl text-primary-400">
          <Text className="font-kanit-bold">Nombres: </Text>
          {names}
        </Text>
      </View>
      <View className="flex flex-row items-center content-center">
        <Text className="text-xl text-primary-400">
          <Text className="font-kanit-bold">Apellidos: </Text>
          {surnames}
        </Text>
      </View>
      <View className="flex flex-row items-center content-center">
        <Text className="text-xl text-primary-400">
          <Text className="font-kanit-bold">E-mail: </Text>
          {email}
        </Text>
      </View>

      <View className="flex flex-row items-center content-center">
        <Text className="text-xl text-primary-400">
          <Text className="font-kanit-bold">Telefono: </Text>
          {telephone}
        </Text>
      </View>

      <View className="flex flex-row gap-1 justify-center items-center mt-3">
        <Ionicons name="cash-outline" size={24} color={blueDark} />
        <Text className="text-2xl font-kanit-bold text-primary-400">
          {salary}
        </Text>
      </View>

      <View className="flex flex-row items-center gap-3 justify-end mt-5">
        <TouchableOpacity
          disabled={true}
          onPress={() => router.push(`/farm/employees/${id}`)}
          className="bg-primary-300 shadow-md shadow-zinc-300 rounded-3xl w-2/6 py-2 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="pencil-outline" size={25} color="white" />
            <Text className="text-lg font-kanit-bold text-white"> Editar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={true}
          onPress={() => router.push(`/farm/employees/${documentId}`)}
          className="bg-red-500 shadow-md shadow-zinc-300 rounded-3xl w-2/6 py-2 text-center"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="remove-circle-outline" size={25} color="white" />
            <Text className="text-lg font-kanit-bold text-white"> Borrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
