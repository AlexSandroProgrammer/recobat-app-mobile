import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  // realizamos la importacion de los tipos de letra
  const [fontsLoaded] = useFonts({
    "Kanit-Bold": require("../assets/fonts/Kanit-Bold.ttf"),
    "Kanit-Regular": require("../assets/fonts/Kanit-Regular.ttf"),
    "Kanit-Thin": require("../assets/fonts/Kanit-Thin.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // si falla la carga de las fuentes
  if (!fontsLoaded) return null;

  return <Stack />;
}
