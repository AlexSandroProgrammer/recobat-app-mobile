import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {
  iconRef?: keyof typeof Ionicons.glyphMap;
}
const ThemedTextInput = ({ iconRef, ...rest }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);
  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg  border  border-primary-300 bg-primary-100 mt-5 py-2">
      <View
        className="flex-1 flex flex-row items-center justify-start z-50"
        onTouchStart={() => inputRef.current?.focus()}
      >
        {iconRef && (
          <Ionicons
            name={iconRef}
            size={20}
            color="#273d88"
            style={{ marginRight: 5 }}
          />
        )}
        <TextInput
          ref={inputRef}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          className="text-base font-kanit text-black-300 ml-2 flex-1"
          {...rest}
          placeholderTextColor="#273d88"
          // cambiamos el color de los inputs
          style={{ color: "#1b2550" }}
        />
      </View>
    </View>
  );
};

export default ThemedTextInput;
