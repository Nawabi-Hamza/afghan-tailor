import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center"
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 10,
    padding: 5,
  },
  button: {
    marginTop: 20,
    width: "100%"
  },
});

export default globalStyles;
