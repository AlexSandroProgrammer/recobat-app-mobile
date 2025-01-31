import icons from "@/constants/icons";
import images from "@/constants/images";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
const ModalWelcome = () => {
  const { user } = useAuthStore();
  // maicolmontes@gmail.com
  return (
    <Animated.View
      entering={FadeIn}
      className="flex-auto content-center items-center bg-[#00000025] justify-center"
    >
      <Animated.View
        entering={SlideInDown}
        className="w-[90%] h-[50%] rounded-lg items-center justify-center bg-slate-50 m-auto"
      >
        <Animated.ScrollView>
          <View className="px-5 w-full mt-10">
            <View className="flex flex-col items-center justify-center">
              <Image
                source={images.logo}
                className="w-48 h-48"
                resizeMode="contain"
                // le cambiamos el color a blanco
                style={{ tintColor: "azul" }}
              />
            </View>
            <Text className="text-2xl font-kanit-bold text-black-300 uppercase text-center mt-1">
              <Text className="text-primary-300">
                Te damos la bienvenida a Recobat, {user?.username}
              </Text>
            </Text>
            <Text className="text-base text-left font-kanit text-black-200 mt-4">
              Para nosotros es todo un gusto saludarte, nos gustaria que
              terminaras de realizar el registro de tus datos, solo te tomara un
              par de minutos...
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/user")}
              className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-10"
            >
              <View className="flex flex-row items-center justify-center">
                <Text className="text-lg font-kanit text-white ml-2">
                  ¡Quiero ir!
                </Text>
                <Image
                  source={icons.send}
                  className="w-5 h-5"
                  resizeMode="contain"
                  // le cambiamos el color a blanco
                  style={{ tintColor: "white" }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </Animated.ScrollView>
      </Animated.View>
    </Animated.View>
  );
};

export default ModalWelcome;
