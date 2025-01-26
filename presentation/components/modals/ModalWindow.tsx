import { Button, Modal, Text, View, Animated, Image } from "react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import icons from "@/constants/icons";

const ModalWindow = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View className="flex-1 justify-center items-center bg-transparent bg-opacity-50">
        <Animated.View
          style={{ opacity: fadeAnim }}
          className="bg-white rounded-lg p-6 w-11/12"
        >
          <Text className="text-lg font-bold mb-4">Datos Incompletos</Text>
          <Text className="text-base mb-6">
            Hemos verificado tus datos y te hacen falta algunos para continuar
            el proceso, te invitamos a terminar de rellenarlos.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/user")}
            className="bg-primary-200 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Text className="text-lg font-kanit text-white ml-2">
                Continuar con los Datos
              </Text>
              <Image
                source={icons.rightArrow}
                className="w-5 h-5"
                resizeMode="contain"
                // le cambiamos el color a blanco
                style={{ tintColor: "white" }}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalWindow;
