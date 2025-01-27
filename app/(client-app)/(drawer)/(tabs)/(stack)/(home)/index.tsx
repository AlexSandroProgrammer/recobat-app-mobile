import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { dataCardItems } from "@/presentation/components/cards/CardItems.data";
import { Card } from "@/presentation/components/cards/Card";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-white">
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
        <View className="flex">
          {dataCardItems.map((item) => (
            <Card
              key={item.title}
              description={item.description}
              route={item.route}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
