import Layout from "@/presentation/layouts/Layout";
import { useLocalSearchParams } from "expo-router";
import FormConditioningCrop from "@/presentation/conditioning-proccess/components/FormConditioningCrop";

const ConditioningProccessScreen = () => {
  // Obtenemos el id de los parámetros de la URL
  //* id del proceso general
  const { id } = useLocalSearchParams<{ id: string }>();
  //* id de la finca
  const { farmId } = useLocalSearchParams<{ farmId: string }>();

  console.log(farmId);

  return (
    <>
      <FormConditioningCrop />
    </>
  );
};

export default ConditioningProccessScreen;
