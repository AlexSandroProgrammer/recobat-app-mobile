import { ThemedText } from "@/presentation/theme/components/ThemedText";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import { useEffect, useState } from "react";
import { View } from "react-native";

const HomeScreen = () => {
  const primary = useThemeColor({}, "primary");
  const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   const dataUser = async () => {
  //     try {
  //       const data = await userAuthenticated();
  //       setUserData(data); // Actualiza el estado con los datos del usuario
  //     } catch (error) {
  //       console.error("Error al obtener los datos del usuario:", error);
  //     }
  //   };
  //   dataUser();
  // }, []);

  return (
    <View style={{ padding: 100 }}>
      <ThemedText style={{ fontFamily: "KanitBold", color: primary }}>
        HomeScreen
      </ThemedText>
      <ThemedText style={{ fontFamily: "KanitRegular" }}>HomeScreen</ThemedText>
      <ThemedText style={{ fontFamily: "KanitThin" }}>HomeScreen</ThemedText>
    </View>
  );
};

export default HomeScreen;
