import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { CardInfo } from "@/presentation/components/cards/CardInfo";
import { FarmCard } from "@/presentation/components/cards/FarmCard";
import DropProfile from "@/presentation/components/theme/DropProfile";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { RelativePathString, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Layout from "@/presentation/layouts/Layout";
import { Ionicons } from "@expo/vector-icons";
import { Farm } from "@/core/farms/interfaces/index.interface";
import {
  BodyFarmResponse,
  Employee,
} from "../../../core/employees/interfaces/index.interface";
import { EmployeeCard } from "./EmployeeCard";
import icons from "@/constants/icons";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import images from "@/constants/images";

const DataDropProfile: DropProfileProps = {
  title: "Mis Colaboradores",
  titleButton: "Registrar",
  routeModal: "/farm/register" as RelativePathString,
};

//* props para listar los empleados y la finca
interface EmployeesListProps {
  employees: Employee[];
  farm: BodyFarmResponse;
}

const EmployeesList: React.FC<EmployeesListProps> = ({ employees, farm }) => {
  const { user } = useAuthStore();

  if (!employees || !farm) {
    return <IsLoadingRefresh />;
  }
  return (
    <Layout>
      <View className="px-5">
        <View className="mb-2">
          <View className="flex flex-row items-start justify-end">
            <TouchableOpacity
              onPress={() => router.push("/")}
              className="bg-red-500 shadow-md shadow-zinc-300 rounded-full w-2/6 py-2"
            >
              <View className="flex flex-row items-center justify-center">
                <Ionicons
                  name="arrow-back-circle-outline"
                  size={25}
                  color="white"
                />
                <Text className="text-lg font-kanit-bold text-white ml-1">
                  Regresar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-kanit text-black-100">
                Bienvenido
              </Text>
              <Text className="text-base font-kanit text-black-300">
                {user?.names}
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-kanit-bold text-black-300">
              Mis Colaboradores
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/")}
              disabled={true}
              className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-3/6 py-2"
            >
              <View className="flex flex-row items-center justify-center">
                <Ionicons name="create-outline" size={25} color="white" />
                <Text className="text-xl font-kanit-bold text-white ml-1">
                  Registrar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {employees.map((employee) => (
            <EmployeeCard key={employee.names} {...employee} />
          ))}
        </View>
      </View>
    </Layout>
  );
};

export default EmployeesList;
