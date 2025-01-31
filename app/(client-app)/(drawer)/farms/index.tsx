import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { FarmCard } from "@/presentation/components/cards/FarmCard";
import DropProfile from "@/presentation/components/theme/DropProfile";
import IsLoadingRefresh from "@/presentation/components/theme/IsLoadingRefresh";
import FarmList from "@/presentation/farms/components/FarmList";
import { useFarms } from "@/presentation/farms/hooks/useFarms";
import { Redirect, RelativePathString } from "expo-router";
import { useRef } from "react";
import { Animated, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DataDropProfile: DropProfileProps = {
  title: "Mis Fincas",
  titleButton: "Registrar",
  routeModal: "/farm/register" as RelativePathString,
};

const FarmScreen = () => {
  const { user } = useAuthStore();

  const { farmsQuery, loadNextPage } = useFarms(user?.id!);

  console.log(farmsQuery.data);

  if (farmsQuery.isLoading) {
    return <IsLoadingRefresh />;
  }

  if (!farmsQuery.data) {
    return <Redirect href="/" />;
  }
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
          <FarmList
            farms={farmsQuery.data?.pages.flatMap((page) => page) ?? []}
            loadNextPage={loadNextPage}
          />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default FarmScreen;
