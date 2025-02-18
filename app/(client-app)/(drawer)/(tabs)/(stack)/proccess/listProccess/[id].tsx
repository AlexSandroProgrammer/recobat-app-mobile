import Layout from "@/presentation/layouts/Layout";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ConditioningCard } from "@/presentation/proccess/components/ConditioningCard";
import { useProccessAll } from "@/presentation/proccess/hooks/useProccessAll";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { JobSubProccessCard } from "@/presentation/proccess/components/JobSubProccessCard";
import { FertilizationCard } from "@/presentation/proccess/components/FertilizationCard";
import { SoilsAnalysisCard } from "@/presentation/proccess/components/SoilsAnalysisCard";
import { PestControlCard } from "@/presentation/proccess/components/PestControlCard";
import { QuimicControlCard } from "@/presentation/proccess/components/QuimicControlCard";
import { WeedControlCard } from "@/presentation/proccess/components/WeedControlCard";
import { DieaseControlCard } from "@/presentation/proccess/components/DieaseControlCard";

const ListProccessScreen = () => {
  // Obtenemos el id de los parámetros de la URL
  const { id } = useLocalSearchParams<{ id: string }>();

  const { proccessAllQuery } = useProccessAll(id);

  if (proccessAllQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  const proccessAll = proccessAllQuery?.data;

  // asignamos los 8 procesos a cada una de las cards
  const conditioning = proccessAll?.conditioning_sub_details; // primer proceso
  const jobSubProccess = proccessAll?.job_sub_proccess_details; // segundo proceso
  const soilsAnalysis = proccessAll?.soils_analysis_details; // tercer proceso
  const fertilization = proccessAll?.fertilization_proccesses; // cuarto proceso
  const quimicControl = proccessAll?.pest_control_proccesses; // quinto proceso
  const organicControl = proccessAll?.pest_organic_proccesses; // sexto proceso
  const weedControl = proccessAll?.weed_control_proccesses; // septimo proceso

  const dieaseControl = proccessAll?.disease_control_proccesses; // octavo proceso

  return (
    <Layout>
      <View className="px-5">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row">
            <Ionicons name="aperture-outline" size={40} color="blue" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-kanit text-black-100">
                Procesos
              </Text>
              <Text className="text-base font-kanit-bold text-black-300">
                Cultivos Transitorios
              </Text>
            </View>
          </View>
        </View>
        <View className="flex gap-6 mt-5">
          {/* Card para el proceso de Acondicionamiento */}
          <ConditioningCard
            conditioning_sub_details={conditioning}
            title="Acondicionamiento del terreno Para la Siembra"
            description="En este proceso aprenderas sobre como acondicionar tus terrenos de una manera segura y confiable."
          />

          {/* Card para el proceso de Acondicionamiento del Terreno */}
          <JobSubProccessCard
            conditioning_sub_details={conditioning}
            job_sub_proccess_details={jobSubProccess}
            title="Adecuacion del Suelo"
            description="En este proceso aprenderas sobre como adecuar tus terrenos de una manera segura y confiable."
          />

          {/* Card para el proceso de Analisis del Suelo */}
          <SoilsAnalysisCard
            job_sub_proccess_details={jobSubProccess}
            soils_analysis_details={soilsAnalysis}
            title="Analisis del Suelo"
            description="En este proceso aprenderas sobre como trabajar con el apoyo de un asistente agronomo para determinar el analisis del suelo tus terrenos de una manera segura y confiable."
          />

          {/* Card para el proceso de Fertilizacion */}
          <FertilizationCard
            soils_analysis_details={soilsAnalysis}
            fertilization_proccesses={fertilization}
            title="Programacion de Fertilizacion"
            description="En este proceso aprenderas sobre como trabajar con el apoyo de un asistente agronomo para la fertilizacion del suelo de tus terrenos de una manera segura y confiable."
          />

          {/* Card para el proceso de Control Quimico de Organicos */}
          <QuimicControlCard
            fertilization_proccesses={fertilization}
            pest_control_proccesses={quimicControl}
            title="Control Quimico de Plagas"
            description="En este proceso aprenderas sobre como trabajar con el apoyo de un asistente agronomo para el control quimico de las plagas en los suelos de tus terrenos de una manera segura y confiable."
          />

          {/* Card para el proceso de Control Organico de Plagas */}
          <PestControlCard
            pest_control_proccesses={quimicControl}
            pest_organic_proccesses={organicControl}
            title="Control Organico de Plagas"
            description="En este proceso aprenderas sobre como trabajar con el apoyo de un asistente agronomo para el control organico de las plagas en los suelos de tus terrenos de una manera segura y confiable."
          />

          {/* Card para el proceso de Control de Malezas */}
          <WeedControlCard
            pest_organic_proccesses={organicControl}
            weed_control_proccesses={weedControl}
            title="Control de Malezas"
            description="En este proceso aprenderas sobre como trabajar con el apoyo de un asistente agronomo para el control de malezas en los suelos de tus terrenos de una manera segura y confiable."
          />

          {/* Card para el proceso de Control de Enfermedades */}
          <DieaseControlCard
            weed_control_proccesses={weedControl}
            disease_control_proccesses={dieaseControl}
            title="Control de Enfermedades"
            description="En este proceso aprenderas sobre como trabajar con el apoyo de un asistente agronomo para el control de enfermedades en los suelos de tus terrenos de una manera segura y confiable."
          />
        </View>
      </View>
    </Layout>
  );
};

export default ListProccessScreen;
