import SidebarMenu from "@/presentation/home/menu/Menu";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  const primary = useThemeColor({}, "primary");
  const [userData, setUserData] = useState({});

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText style={[styles.welcomeText, { color: primary }]}>
        Bienvenido
      </ThemedText>
      <SidebarMenu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que el contenido crezca más allá del tamaño de la pantalla
    padding: 15, // Margen interno para el contenido
  },
  welcomeText: {
    fontFamily: "KanitBold",
    fontSize: 20,
    marginBottom: 10, // Espaciado debajo del texto
  },
});

export default HomeScreen;
