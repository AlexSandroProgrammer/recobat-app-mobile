import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import { dataCardItems } from "@/presentation/components/cards/CardItems.data";
import { FarmCard } from "@/presentation/components/cards/FarmCard";
import DropProfile from "@/presentation/components/theme/DropProfile";
import { RelativePathString } from "expo-router";
import { useRef } from "react";
import { Animated, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DataDropProfile: DropProfileProps = {
  title: "Mis Fincas",
  titleButton: "Registrar",
  routeModal: "/farm/register" as RelativePathString,
};

const FarmScreen = () => {
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
            {dataCardItems.map((item, index) => (
              <FarmCard key={item.title} {...item} />
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default FarmScreen;
