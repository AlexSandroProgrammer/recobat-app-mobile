import { Text, TouchableOpacity, View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  dataCardItems,
  backgroundColors,
} from "@/presentation/components/cards/CardItems.data";
import { CardStadistic } from "@/presentation/components/cards/CardStadistic";
import { useRef } from "react";
import DropProfile from "@/presentation/components/theme/DropProfile";
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
          <DropProfile />
          <View className="flex gap-5 mb-28">
            {dataCardItems.map((item, index) => (
              <CardStadistic
                key={item.title}
                {...item}
                bgColor={backgroundColors[index % backgroundColors.length]}
              />
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default FarmScreen;
