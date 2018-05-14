import { StyleSheet } from "react-native";

export default StyleSheet.create({
  itemContainer: {
    marginBottom: 2,
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    color: "black"
  },
  value: {
    width: "50%"
  },
  label: {
    width: "50%"
  },
  dropdown: {
    maxHeight: 100,
    backgroundColor: "#f1f1f1",
    position: "absolute",
    zIndex: 1,
    top: 40,
    left: 0,
    right: 0
  },
  textInput: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    padding: 2,
    marginBottom: 10,
    marginTop: 10
  }
});
