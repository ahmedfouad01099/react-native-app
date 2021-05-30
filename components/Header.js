import React from "react";

import { View, Text, StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? "white" : colors.primary,
    alignItems: "center",
    borderBottomColor: Platform.OS === "android" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "android" ? 1 : 0,
  },
});

export default Header;
