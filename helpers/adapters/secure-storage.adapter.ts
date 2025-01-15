import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

export class SecureStorageAdapter {
  // creamos una funcion para registrar el token
  static async setItem(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      Alert.alert("Error", "Fallo el enviar datos del token");
    }
  }

  // creamos una funcion para obtener el token
  static async getItem(key: string, value: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      Alert.alert("Error", "Fallo al obtener datos del token");
      return null;
    }
  }

  // creamos una funcion para eliminar el token
  static async removeItem(key: string) {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      Alert.alert("Error", "Fallo al eliminar datos del token");
    }
  }
}
