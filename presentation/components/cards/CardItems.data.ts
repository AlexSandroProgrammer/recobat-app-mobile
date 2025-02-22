import { RelativePathString } from "expo-router";

//* creamos otro arreglo el cual tendra el menu de configuracion
export const dataCardItems = [
  {
    title: "Fincas",
    description: "Cantidad de Fincas registradas.",
    icon: "home-outline",
    route: "/farms" as RelativePathString,
  },
  {
    title: "Cultivos En Proceso",
    description: "Cultivos que actualmente estan en curso...",
    icon: "person-outline",
    route: "/farms" as RelativePathString,
  },
  {
    title: "Cultivo Finalizados",
    description: "Cultivos que actualmente estan finalizados...",
    icon: "person-outline",
    route: "/farms" as RelativePathString,
  },
];

export const backgroundColors = [
  "bg-primary-400", // Primer color
  "bg-blue-700", // Segundo color
  "bg-green-600", // Más colores si es necesario
];
