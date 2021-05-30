import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import colors from "../constants/colors";

function MainButton(props) {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version > 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.5} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttontext}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
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
