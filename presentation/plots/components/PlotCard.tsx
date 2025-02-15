import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity, Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RelativePathString, router } from "expo-router";
import icons from "@/constants/icons";
import { Plot } from "@/core/plots/interfaces/index.interface";

export const PlotCard = ({
  id,
  namePlot,
  size,
  documentId,
  status_plot,
}: Plot) => {
  // Valor animado para la escala del botón
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animación de pulsación en bucle
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.1, // Aumenta la escala (puedes ajustar este valor)
          duration: 600, // Duración de la animación (ms)
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1, // Regresa a la escala original
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnimation]);

  return (
    <View className="w-full p-6 rounded-xl shadow-lg bg-zinc-50 shadow-slate-500/90 border border-slate-300 relative mb-6">
      {/* Encabezado con icono y título */}
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row">
          <Ionicons name="leaf-outline" size={24} color="green" />
          <Text className="text-2xl font-kanit-bold text-primary-400">
            {`${id} - ${namePlot}`}
          </Text>
        </View>
        <View className="flex flex-row">
          <Ionicons name="analytics-outline" size={24} color="green" />
          <Text className="text-2xl font-kanit text-primary-400">
            {" "}
            {size} Ha
          </Text>
        </View>
      </View>
      {/* Footer */}
      <View className="flex flex-row justify-center mt-5">
        //* verificamos el lote ya esta verificado
        {status_plot === "verified" ? (
          <TouchableOpacity
            onPress={() =>
              router.push(
                `/proccess/verification/${documentId}` as RelativePathString
              )
            }
            className="bg-primary-200 shadow-md shadow-blue-800 rounded-full w-4/6 py-4 text-center"
          >
            <View className="flex flex-row items-center justify-center">
              <Text className="text-lg font-kanit-bold text-white">
                Iniciar Proceso{" "}
              </Text>
              <Ionicons name="aperture-outline" size={30} color="white" />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              router.push(
                `/proccess/verification/${documentId}` as RelativePathString
              )
            }
            className="bg-green-500 shadow-md shadow-green-800 rounded-full w-4/6 py-4 text-center"
          >
            <Animated.View style={{ transform: [{ scale: pulseAnimation }] }}>
              <View className="flex flex-row items-center justify-center">
                <Text className="text-lg font-kanit-bold text-white">
                  Verificar Cultivo{" "}
                </Text>
                <Ionicons
                  name="search-circle-outline"
                  size={30}
                  color="white"
                />
              </View>
            </Animated.View>
          </TouchableOpacity>
        )}
      </View>

      <View className="flex flex-row justify-end mt-2">
        <View className="flex flex-row">
          {status_plot === "verified" ? (
            <View className="flex flex-row items-center justify-center">
              <Text className="text-md font-kanit-bold">Lote Verificado </Text>
              <Ionicons
                name="checkmark-circle-outline"
                size={30}
                color="green"
              />
            </View>
          ) : (
            <View className="flex flex-row items-center justify-center">
              <Text className="text-md font-kanit-bold">Sin Verificar </Text>
              <Ionicons name="alert-circle-outline" size={30} color="red" />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
