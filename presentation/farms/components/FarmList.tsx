import { View, Text } from "react-native";
import React from "react";
import { Farm } from "@/core/farm/interfaces/index.interface";
import { FlatList } from "react-native-gesture-handler";
import { FarmCard } from "@/presentation/components/cards/FarmCard";

interface Props {
  farms: Farm[];
  loadNextPage: () => void;
}

const FarmList = ({ farms, loadNextPage }: Props) => {
  return (
    <FlatList
      className="flex gap-5 mb-28"
      data={farms}
      numColumns={1}
      keyExtractor={(item) => item?.codeFarm}
      renderItem={({ item }) => <FarmCard farm={item} />}
    ></FlatList>
  );
};

export default FarmList;
