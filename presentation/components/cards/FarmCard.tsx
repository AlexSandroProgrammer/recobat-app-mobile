import { useState } from "react";
import { Farm } from "@/core/farms/interfaces/index.interface";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";

export const FarmCard = ({
  address,
  codeFarm,
  telephone,
  nameFarm,
  id,
  documentId,
}: Farm) => {
  const blueDark = "#1b2550";
  const [isLottieLoaded, setLottieLoaded] = useState(false);

  return (
    <View className="w-full p-6 rounded-xl shadow-lg bg-zinc-50 border border-slate-500 mb-6">
      <View className="flex-1 justify-center gap-3">
        <View className="flex flex-row gap-1 items-center">
          <Ionicons name="home-sharp" size={24} color={blueDark} />
          <Text className="text-2xl font-kanit-bold text-primary-400">
            {nameFarm}
          </Text>
        </View>

        <View className="flex flex-row gap-1 items-center">
          <Ionicons name="location-sharp" size={24} color={blueDark} />
          <Text className="text-lg font-kanit text-primary-400">{address}</Text>
        </View>
      </View>

      <View className="flex flex-row mt-2">
        {/* Contenedor del Lottie con ActivityIndicator */}
        <View className="justify-center items-center relative">
          <LottieView
            source={require("@/assets/lottie/farm.json")}
            autoPlay
            loop
            speed={1.2}
            style={{ width: 170, height: 170 }}
            onLayout={() => setLottieLoaded(true)}
          />
          {!isLottieLoaded && (
            <ActivityIndicator
              size="large"
              color={blueDark}
              style={{ position: "absolute" }}
            />
          )}
        </View>
        {/* Datos adicionales */}
        <View className="flex-1 pl-4 justify-center gap-4">
          <View className="flex flex-row items-center">
            <Ionicons name="checkmark-done-circle" size={24} color={blueDark} />
            <Text className="text-lg font-kanit text-primary-400 ml-1">
              {codeFarm}
            </Text>
          </View>
          <View className="flex flex-row items-center">
            <Ionicons name="phone-portrait" size={25} color={blueDark} />
            <Text className="text-lg font-kanit text-primary-400 ml-1">
              {telephone}
            </Text>
          </View>
        </View>
      </View>

      {/* Footer - Lotes */}
      <View className="flex flex-row items-end gap-3 justify-center">
        <TouchableOpacity
          onPress={() => router.push(`/farm/listPlot/${documentId}`)}
          className="bg-primary-300 shadow-md shadow-zinc-300 rounded-3xl w-5/6 py-3"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="eye-outline" size={26} color="white" />
            <Text className="text-lg font-kanit-bold text-white ml-1">
              Ver Lotes
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push(`/farm/plots/${id}`)}
          className="bg-green-500 shadow-md shadow-zinc-300 rounded-xl w-1/6 py-3"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="add-circle-outline" size={26} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Footer - Empleados */}
      <View className="flex flex-row items-end gap-3 justify-center mt-5">
        <TouchableOpacity
          onPress={() => router.push(`/farm/employees/${documentId}`)}
          className="bg-slate-800 shadow-md shadow-zinc-300 rounded-3xl w-5/6 py-3"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="eye-outline" size={26} color="white" />
            <Text className="text-lg font-kanit-bold text-white ml-1">
              Ver Empleados
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push(`/farm/employees/${id}`)}
          className="bg-green-500 shadow-md shadow-zinc-300 rounded-xl w-1/6 py-3"
        >
          <View className="flex flex-row items-center justify-center">
            <Ionicons name="add-circle-outline" size={26} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
