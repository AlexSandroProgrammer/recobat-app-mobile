import icons from "@/constants/icons";
import images from "@/constants/images";
import { CardsItems } from "@/core/client/interfaces/index.interface";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

// export const FeaturedCard = ({}: CardsItems) => {
//   return (
//     <TouchableOpacity
//       onPress={() => console.log("")}
//       className="flex flex-col items-start w-60 h-80 relative"
//     >
//       <Image source={images.cardGradient} className="size-full rounded-2xl" />

//       <Image
//         source={images.cardGradient}
//         className="size-full rounded-2xl absolute bottom-0"
//       />

//       <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
//         <Image source={icons.star} className="size-3.5" />
//         <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
//           Example
//         </Text>
//       </View>

//       <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
//         <Text
//           className="text-xl font-rubik-extrabold text-white"
//           numberOfLines={1}
//         >
//           Example
//         </Text>
//         <Text className="text-base font-rubik text-white" numberOfLines={1}>
//           example
//         </Text>

//         <View className="flex flex-row items-center justify-between w-full">
//           <Text className="text-xl font-rubik-extrabold text-white">
//             example
//           </Text>
//           <Image source={icons.heart} className="size-5" />
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

export const Card = ({ title, description, icon, route }: CardsItems) => {
  return (
    <TouchableOpacity
      className="w-full p-6 rounded-xl bg-primary-200 shadow-lg shadow-blue-950/100 relative"
      onPress={() => console.log("")}
    >
      {/* Encabezado con icono y título */}
      <View className="flex flex-row items-center content-center">
        <Ionicons name="home-outline" size={25} color="white" />
        <Text className="text-2xl font-kanit-bold text-slate-100">
          {" "}
          {title}
        </Text>
      </View>

      {/* Contenido Principal */}
      <View className="mt-3">
        <Text className="text-sm font-kanit text-slate-100">{description}</Text>
        {/* Estadísticas */}
        <View className="flex flex-row mt-3">
          <View className="flex items-center">
            <Text className="text-2xl font-kanit text-yellow-400">
              120 <Text className="text-slate-300">{title}</Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="flex flex-row justify-between items-center mt-3">
        <TouchableOpacity
          onPress={() => console.log("")}
          className="bg-primary-100 shadow-md shadow-zinc-300 rounded-full w-full py-4"
        >
          <View className="flex flex-row items-center justify-center">
            <Text className="text-lg font-kanit text-black ml-2">Mirar</Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={25}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
