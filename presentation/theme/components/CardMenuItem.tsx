// CardMenuItem.js
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { stylesCard } from "../styles/card/card-style";
import { DataItemMenu } from "@/presentation/home/menu/DataItem.types";

const CardMenuItem = ({ title, description, urlImg }: DataItemMenu) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => alert(`${title} clicked!`)}
    >
      <Animated.View
        style={[stylesCard.card, { transform: [{ scale: scaleValue }] }]}
      >
        <Image source={urlImg} style={stylesCard.image} resizeMode="cover" />
        <View style={stylesCard.content}>
          <Text style={stylesCard.title}>{title}</Text>
          <Text style={stylesCard.description}>{description}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CardMenuItem;
