import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGame";
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});