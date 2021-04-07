import React from "react";
import { Button, StyleSheet, View, Image, Text } from "react-native";
import colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          style={styles.image}
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://scontent.fcai3-1.fna.fbcdn.net/v/t1.6435-9/158363729_2511583365802156_869972864946978346_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=1H_qxZfVntMAX-5_lCU&_nc_ht=scontent.fcai3-1.fna&oh=662c5dd5c87e9abbcf29e528af4ce07c&oe=60935187",
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.resultcontainer}>
        <BodyText style={styles.resultText}>
          Your phone needed:
          <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to
          guess the number:
          <Text style={styles.highlight}> {props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultcontainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default GameOverScreen;
