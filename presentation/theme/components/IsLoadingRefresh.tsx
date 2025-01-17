import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useThemeColor } from "../hooks/useThemeColor";

const IsLoadingRefresh = () => {
  const primaryColor = useThemeColor({}, "primary");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <ActivityIndicator size="large" color={primaryColor} />
    </View>
  );
};

export default IsLoadingRefresh;
