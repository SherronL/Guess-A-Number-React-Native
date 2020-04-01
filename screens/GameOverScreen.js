import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Colors from "../constants/colors";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Image
        fadeDuration={1000}
        // source={require("../assets/walter.jpg")}
        source={{ uri: "https://pbs.twimg.com/media/EAdaJ8WXUAEdKOI.jpg" }}
        style={styles.image}
      />
      <Text>
        It took computer
        <Text style={styles.highlight}>{props.tries} </Text>
        tries to guess the number
        <Text>{props.userNumber}</Text>
      </Text>
      <Text>The number was {props.userNumber}</Text>
      <View style={styles.button}>
        <Button
          title="New Game"
          onPress={props.onRestart}
          color={Colors.primary}
        />
      </View>
    </View>
  );
  //   <View style={styles.screen}>
  //     <Text>It took computer {currentTries.current} tries!</Text>
  //     <Card style={styles.buttonContainer}>
  //       <Button title="Go back" onPress={() => props.onGoBack("true")} />
  //     </Card>
  //   </View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center"
  },
  image: {
    width: "80%",
    height: 300
  },
  highlight: {
    color: Colors.accent
  }
});

export default GameOverScreen;
