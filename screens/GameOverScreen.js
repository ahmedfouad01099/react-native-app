import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import * as ScreenOrientation from "expo-screen-orientation";

function GameOverScreen(props) {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  const [imageContainerWidth, setImageContainer] = useState(
    Dimensions.get("window").width
  );

  const [imageContainerHight, setImageContainerHeight] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateImageContainer = () => {
      setImageContainer(Dimensions.get("window").width);
      setImageContainerHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateImageContainer);
    return () => {
      Dimensions.removeEventListener("change", updateImageContainer);
    };
  });
  console.log(imageContainerWidth);
  console.log(Dimensions.get("window").width);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View
          style={
            imageContainerWidth > 412
              ? styles.imageContainerSmall
              : styles.imageContainer
          }
        >
          <Image
            fadeDuration={1000}
            style={styles.image}
            // source={require("../assets/success.png")}
            source={{
              uri: "https://yt3.ggpht.com/yti/ANoDKi6jqXOSGYfa3C5NR6FvgduyNsPK4p2Dl-0fmlCA=s88-c-k-c0x00ffffff-no-rj-mo",
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.resultcontainer}>
          <BodyText style={styles.resultText}>
            Your phone needed:
            <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds
            to guess the number:
            <Text style={styles.highlight}> {props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainerSmall: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
    alignItems: "center",
    justifyContent: "center",
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
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
