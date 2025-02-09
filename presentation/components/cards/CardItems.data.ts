//* creamos otro arreglo el cual tendra el menu de configuracion
export const dataCardItems = [
  {
    title: "Fincas",
    description: "Cantidad de Fincas registradas.",
    icon: "home-outline",
    route: "/farms/index",
  },
  {
    title: "Empleados",
    description: "Cantidad de Empleados registrados",
    icon: "person-outline",
    route: "/fincas",
  },
  {
    title: "Cultivos En Proceso",
    description: "Cultivos que actualmente estan en curso...",
    icon: "person-outline",
    route: "/fincas",
  },
  {
    title: "Cultivo Finalizados",
    description: "Cultivos que actualmente estan finalizados...",
    icon: "person-outline",
    route: "/fincas",
  },
];

export const backgroundColors = [
  "bg-primary-400", // Primer color
  "bg-blue-700", // Segundo color
  "bg-yellow-500", // Tercer color
  "bg-green-500", // Más colores si es necesario
];
