import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { FarmCard } from "@/presentation/components/cards/FarmCard";
import DropProfile from "@/presentation/components/theme/DropProfile";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import { RelativePathString } from "expo-router";
import React, { useRef } from "react";
import { Animated, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFarms } from "../hooks/useFarms";

const DataDropProfile: DropProfileProps = {
  title: "Mis Fincas",
  titleButton: "Registrar",
  routeModal: "/farm/register" as RelativePathString,
};

const FarmList = ({ userId }: { userId: number }) => {
  const { farmsQuery } = useFarms(userId);
  // si estamos cargando las fincas, mostramos el componente de carga
  if (farmsQuery.isLoading) {
    return <IsLoadingRefresh />;
  }
  const farms = farmsQuery?.data?.farms!;
  // Referencia para controlar el scroll animado
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView className="h-full bg-white">
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View className="px-5">
          <DropProfile {...DataDropProfile} />
            <View className="flex gap-5 mb-28">
              {farms.map((farm) => (
                <FarmCard key={farm.id} {...farm} />
              ))}
            </View>          
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default FarmList;
