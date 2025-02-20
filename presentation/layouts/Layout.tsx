import React, { useRef } from "react";
import { Animated, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Usamos useRef para mantener el mismo Animated.Value entre renderizados.
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      className="flex h-full bg-white"
    >
      <View>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={5}
        >
          <View className="mb-24 mt-3">{children}</View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Layout;
