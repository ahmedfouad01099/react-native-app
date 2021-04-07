import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={props.onPress}>
      <View style={styles.buttontext}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttontext: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
