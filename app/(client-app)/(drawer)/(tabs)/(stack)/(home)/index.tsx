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

const Home = () => {
  // Referencia para controlar el scroll animado
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
          <View className="flex flex-row items-center justify-between mt-5">
            <View className="flex flex-row">
              <Image source={images.avatar} className="size-12 rounded-full" />
              <View className="flex flex-col items-start ml-2 justify-center">
                <Text className="text-xs font-kanit text-black-100">
                  Buenas Noches
                </Text>
                <Text className="text-base font-kanit text-black-300">
                  Alejandro
                </Text>
              </View>
            </View>
            <Image source={icons.bell} className="size-6" />
          </View>
          <View className="my-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-kanit-bold text-black-300">
                Estadisticas
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-kanit-bold text-primary-300">
                  Mis Cultivos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
