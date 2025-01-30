import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

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
  static async getItem(key: string) {
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

  // creamos una funcion para registrar al usuario
  static async setUser(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      Alert.alert(
        "Error",
        "Fallo al momento de registrar los datos del usuario"
      );
    }
  }
  // creamos una funcion para obtener los datos del usuario
  static async getUser(key: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      Alert.alert("Error", "Fallo al obtener datos del usuario");
      return null;
    }
  }
  // creamos una funcion para eliminar los datos del usuario
  static async removeUser(key: string) {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      Alert.alert("Error", "Fallo al eliminar datos del usuario");
    }
  }
}
