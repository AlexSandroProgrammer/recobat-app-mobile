import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { CardInfo } from "@/presentation/components/cards/CardInfo";
import { FarmCard } from "@/presentation/components/cards/FarmCard";
import DropProfile from "@/presentation/components/theme/DropProfile";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { RelativePathString, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Layout from "@/presentation/layouts/Layout";
import { Ionicons } from "@expo/vector-icons";
import { Farm } from "@/core/farms/interfaces/index.interface";
import {
  BodyFarmResponse,
  Employee,
} from "../../../core/employees/interfaces/index.interface";
import { EmployeeCard } from "./EmployeeCard";

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
        <DropProfile {...DataDropProfile} />

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
