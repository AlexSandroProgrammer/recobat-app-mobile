import { Ionicons } from "@expo/vector-icons";
import { Text, Pressable, PressableProps, StyleSheet } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends PressableProps {
  children: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedButton = ({ children, icon, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? primaryColor + "90" : primaryColor,
        },
        styles.button,
      ]}
      {...rest}
    >
      <Text style={{ color: "white", fontFamily: "KanitBold", fontSize: 18 }}>
        {children}
      </Text>

      {icon && (
        <Ionicons
          name={icon}
          size={22}
          color="white"
          style={{ marginHorizontal: 4 }}
        />
      )}
    </Pressable>
  );
};
export default ThemedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
