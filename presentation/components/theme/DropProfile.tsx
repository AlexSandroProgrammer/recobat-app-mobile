import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import { DropProfileProps } from "../../../core/client/interfaces/index.interface";
import { router } from "expo-router";
import { RelativePathString } from "expo-router";

const DropProfile = ({ title, titleButton, routeModal }: DropProfileProps) => {
  return (
    <>
      <View className="flex flex-row items-center justify-between mt-5">
        <View className="flex flex-row">
          <Image source={images.avatar} className="size-12 rounded-full" />
          <View className="flex flex-col items-start ml-2 justify-center">
            <Text className="text-xs font-kanit text-black-100">
              Bienvenido
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
