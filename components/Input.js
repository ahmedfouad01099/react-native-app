import React from "react";
import { StyleSheet, TextInput } from "react-native";
export default function Input(props) {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
