// SidebarMenu.js
import React from "react";
import { View } from "react-native";
import CardMenuItem from "@/presentation/theme/components/CardMenuItem";
import { dataMenuItems } from "./MenuRoutes.data";

const SidebarMenu = () => {
  return (
    <View>
      {dataMenuItems.map(({ title, description, urlImg, route }, index) => (
        <CardMenuItem
          key={index} // Siempre incluye una key única
          title={title}
          description={description}
          urlImg={urlImg}
          route={route} // Ruta a la que se redirecciona al presionar un item del menú
        />
      ))}
    </View>
  );
};

export default SidebarMenu;
