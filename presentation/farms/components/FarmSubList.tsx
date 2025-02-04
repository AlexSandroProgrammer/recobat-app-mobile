import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Farm } from "@/core/farms/interfaces/index.interface";
import { FarmCard } from "@/presentation/components/cards/FarmCard";

interface Props {
  farms: Farm[];
}

const FarmSubList = ({ farms }: Props) => {
  return (
    <FlatList
      data={farms}
      keyExtractor={(farm) => farm.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <FarmCard
            address={item.address}
            codeFarm={item.codeFarm}
            telephone={item.telephone}
            nameFarm={item.nameFarm}
            id={item.id}
            latitude={item.latitude}
            altitude={item.altitude}
          />
        </View>
      )}
    />
  );
};

export default FarmSubList;
