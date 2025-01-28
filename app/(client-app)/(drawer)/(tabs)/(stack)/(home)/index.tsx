import { Image, Text, TouchableOpacity, View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {
  dataCardItems,
  backgroundColors,
} from "@/presentation/components/cards/CardItems.data";
import { CardStadistic } from "@/presentation/components/cards/CardStadistic";
import { useRef } from "react";
import DropProfile from "@/presentation/components/theme/DropProfile";
import { DropProfileProps } from "../../../../../../core/client/interfaces/index.interface";

const DataDropProfile: DropProfileProps = {
  title: "Estadisticas",
  titleButton: "Crear",
  routeModal: "Estadisticas",
};

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView className="h-full bg-white">
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true } // Activa el uso del driver nativo para mayor rendimiento
        )}
        scrollEventThrottle={16} // Controla la frecuencia de actualización del evento de scroll
      >
        <View className="px-5">
          <DropProfile {...DataDropProfile} />
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

export default Home;
