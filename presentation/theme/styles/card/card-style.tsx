import { StyleSheet } from "react-native";

export const stylesCard = StyleSheet.create({
  card: {
    backgroundColor: "#f1feef",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    margin: 8,
    overflow: "hidden",
    transform: [{ scale: 2 }],
    fontFamily: "KanitBold",
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#24ca12",
    marginBottom: 8,
    fontFamily: "KanitBold",
  },
  description: {
    fontSize: 14,
    color: "#555",
    fontFamily: "KanitRegular",
  },
});
