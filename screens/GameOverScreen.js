import React from "react";
import { StyleSheet, Text, View } from "react-native";

function GameOverScreen(props) {
  return (
    <View>
      <Text>The Game is Over!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
