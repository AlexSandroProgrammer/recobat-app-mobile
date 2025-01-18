// dataMenuItems.js
export const dataMenuItems = [
  {
    title: "Gestionar Mis Fincas",
    description:
      "Haz clic en la tarjeta para ver las fincas registradas y gestionarlas fácilmente",
    urlImg: require("@/assets/images/cardtwo.jpg"), // Import estático
    route: "/(farm)/index", // ruta para mostrar las fincas registradas
  },
  {
    title: "Cultivos En Proceso",
    description:
      "Haz clic en la tarjeta para gestionar los cultivos que estan en proceso",
    urlImg: require("@/assets/images/cardfour.jpg"), // Import estático
    route: "/",
    //... otros items
  },
  {
    title: "Cultivos Finalizados",
    description:
      "Haz clic en la tarjeta para visualizar los cultivos finalizados",
    urlImg: require("@/assets/images/cardthree.jpg"), // Import estático
    route: "/",
    //... otros items
  },
  {
    title: "Gestionar Mis Datos",
    description: "Haz clic en la tarjeta para gestionar tus datos personales",
    urlImg: require("@/assets/images/cardone.jpg"), // Import estático
    route: "/",
    //... otros items
  },
];
