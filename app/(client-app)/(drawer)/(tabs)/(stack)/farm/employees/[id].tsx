import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useEmployees } from "@/presentation/employees/hooks/useEmployees";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import EmployeesList from "@/presentation/employees/components/EmployeesList";

const EmployeeScreen = () => {
  //* revisamos la finca tiene empleados registrados
  const { id } = useLocalSearchParams<{ id: string }>();

  const { employeesQuery } = useEmployees(id);

  if (employeesQuery.isLoading) {
    <IsLoadingRefresh />;
  }

  const farm = employeesQuery?.data!;
  const employees = employeesQuery?.data?.employees!;

  console.log(employees);

  return (
    <>
      <EmployeesList employees={employees} farm={farm} />
    </>
  );
};

export default EmployeeScreen;
