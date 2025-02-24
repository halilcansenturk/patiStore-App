import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  image: {
    backgroundColor: "white",
    height: Dimensions.get("window").height / 4,
    borderRadius: 15,
    resizeMode: "contain",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
    marginBottom: 3,
  },

  price: {
    color: "gray",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 3,
    margin: 5,
  },
  stockStatus: {
    fontWeight: 900,
    fontSize: 20,
    textAlign: "left",
    color: "red",
    margin: 5,
  },
});
