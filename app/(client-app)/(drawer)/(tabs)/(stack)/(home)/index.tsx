import { View } from "react-native";
import { RelativePathString } from "expo-router";
import {
  backgroundColors,
  dataCardItems,
} from "@/presentation/components/cards/CardItems.data";
import { CardStadistic } from "@/presentation/components/cards/CardStadistic";
import DropProfile from "@/presentation/components/theme/DropProfile";
import { DropProfileProps } from "@/core/client/interfaces/index.interface";
import Layout from "@/presentation/layouts/Layout";

const DataDropProfile: DropProfileProps = {
  title: "Estadisticas",
  titleButton: "Iniciar",
  routeModal: "/farms" as RelativePathString,
};

const Home = () => {
  return (
    <Layout>
      <View className="px-5">
        <DropProfile {...DataDropProfile} />
        <View className="flex gap-5">
          {dataCardItems.map((item, index) => (
            <CardStadistic
              key={item.title}
              {...item}
              bgColor={backgroundColors[index % backgroundColors.length]}
            />
          ))}
        </View>
      </View>
    </Layout>
  );
};

export default Home;
