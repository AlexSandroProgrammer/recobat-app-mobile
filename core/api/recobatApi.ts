//* importamos axios
import axios from "axios";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { Platform } from "react-native";

//TODO: conectar mediante vars, Android e IOS
const STAGE = process.env.EXPO_PUBLIC_STAGE || "dev";

export const API_URL =
  STAGE === "production"
    ? process.env.EXPO_PUBLIC_API_URL
    : Platform.OS === "ios"
    ? process.env.EXPO_PUBLIC_API_URL_IOS
    : process.env.EXPO_PUBLIC_API_URL_ANDROID;

// console.log({ STAGE, [Platform.OS]: API_URL });

const recobatApi = axios.create({
  baseURL: API_URL,
});

//implementacion los interceptores
recobatApi.interceptors.request.use(async (config) => {
  // verificamos si tenemos un token en el secure storage
  const token = await SecureStorageAdapter.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export { recobatApi };
