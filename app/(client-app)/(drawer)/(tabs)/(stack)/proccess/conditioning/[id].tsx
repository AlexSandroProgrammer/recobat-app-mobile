import { Redirect, useLocalSearchParams } from "expo-router";
import FormConditioningCrop from "@/presentation/conditioning-proccess/components/FormConditioningCrop";
import { useEmployees } from "@/presentation/employees/hooks/useEmployees";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { SelectItem } from "@/core/theme/index.interface";
import { useTypeConditionings } from "@/presentation/conditioning-proccess/hooks/useTypeConditionings";

const ConditioningProccessScreen = () => {
  // Obtenemos el id de los parámetros de la URL
  //* id del proceso general
  const { id } = useLocalSearchParams<{ id: string }>();
  //* id de la finca
  const { farmId } = useLocalSearchParams<{ farmId: string }>();

  const { employeesQuery } = useEmployees(`${farmId}`);
  const { typesConditioningsQuery } = useTypeConditionings();

  if (employeesQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  if (typesConditioningsQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  if (employeesQuery.isError || typesConditioningsQuery.isError) {
    return <Redirect href="/farms" />;
  }

  const farm = employeesQuery.data;
  const employees = employeesQuery?.data?.employees ?? [];

  const typesConditioning = typesConditioningsQuery?.data?.data ?? [];

  // Mapeamos los datos para obtener solo el id y el nombre del cultivo
  const filteredEmployees = employees.map((employee) => ({
    label: `${employee.document} - ${employee.names} ${employee.surnames} `,
    value: employee.id,
  }));

  // Mapeamos los datos para obtener solo el id y el nombre del cultivo
  const filteredConditioning = typesConditioning.map((typeConditioning) => ({
    label: typeConditioning.nameConditioning,
    value: typeConditioning.id,
  }));

  // Opciones para el select del cultivo
  const employeesOptions: SelectItem[] = filteredEmployees;
  const conditioningsOptions: SelectItem[] = filteredConditioning;

  return (
    <>
      <FormConditioningCrop
        id={id}
        employeesOptions={employeesOptions}
        conditioningsOptions={conditioningsOptions}
      />
    </>
  );
};

export default ConditioningProccessScreen;
