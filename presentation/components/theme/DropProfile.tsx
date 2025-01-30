import icons from "@/constants/icons";
import images from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { DropProfileProps } from "../../../core/client/interfaces/index.interface";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";

const DropProfile = ({ title, titleButton, routeModal }: DropProfileProps) => {
  const { user } = useAuthStore();
  return (
    <>
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row">
          <Image source={images.avatar} className="size-12 rounded-full" />
          <View className="flex flex-col items-start ml-2 justify-center">
            <Text className="text-xs font-kanit text-black-100">
              Bienvenido
            </Text>
            <Text className="text-base font-kanit text-black-300">
              {user?.names}
            </Text>
          </View>
        </View>
        <Image source={icons.bell} className="size-6" />
      </View>
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-kanit-bold text-black-300">
            {title}
          </Text>
          <TouchableOpacity
            onPress={() => router.push(routeModal)}
            className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-48 py-2"
          >
            <View className="flex flex-row items-center justify-center">
              <Ionicons name="create-outline" size={25} color="white" />
              <Text className="text-xl font-kanit-bold text-white ml-1">
                {titleButton}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DropProfile;
