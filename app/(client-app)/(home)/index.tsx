import { ThemedText } from "@/presentation/theme/components/ThemedText";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import { View } from "react-native";

const HomeScreen = () => {
  const primary = useThemeColor({}, "primary");
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
