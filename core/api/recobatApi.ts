//TODO: conectar mediante vars, Android e IOS
//* importamos axios
import axios from "axios";

const recobatApi = axios.create({
  baseURL: "localhost:1337/api",
});

//TODO: implementar los interceptores
export { recobatApi };
