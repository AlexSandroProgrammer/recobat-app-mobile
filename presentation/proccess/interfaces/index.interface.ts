import { RelativePathString } from "expo-router";

export interface CardProccessProps {
  title: string;
  description: string;
  route?: RelativePathString;
  id: string;
}
