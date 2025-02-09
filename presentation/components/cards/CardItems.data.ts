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
    title: "Empleados",
    description: "Cantidad de Empleados registrados",
    icon: "person-outline",
    route: "/employees" as RelativePathString,
  },
  {
    title: "Cultivos En Proceso",
    description: "Cultivos que actualmente estan en curso...",
    icon: "person-outline",
    route: "/fincas" as RelativePathString,
  },
  {
    title: "Cultivo Finalizados",
    description: "Cultivos que actualmente estan finalizados...",
    icon: "person-outline",
    route: "/fincas" as RelativePathString,
  },
];

export const backgroundColors = [
  "bg-slate-900", // Tercer color
  "bg-primary-300", // Primer color
  "bg-primary-200", // Segundo color
  "bg-green-500", // Más colores si es necesario
];
