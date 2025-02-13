import { View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const IsLoadingRefresh = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={50} color="#4880e9" />
    </View>
  );
};

export default IsLoadingRefresh;
