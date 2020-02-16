import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

// renders new number when new guess occurs
const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  ); // name

  const [tries, setTries] = useState("");

  const isLower = () => {
    setCurrentGuess(generateRandomBetween(1, currentGuess, currentGuess));
  };

  const isHigher = () => {
    setCurrentGuess(generateRandomBetween(currentGuess, 100, currentGuess));
  };

  // its not incrementing or my tries just doesnt work in this case wtf
  const increment = () => {
    let n = 0;
    n = n + 1;
    setTries(n);
  };

  const combinedLow = () => {
    isLower();
    increment();
  };

  const combinedHigh = () => {
    isHigher();
    increment();
  };

  if (currentGuess === props.userChoice) {
    return (
      <View style={styles.screen}>
        <Text>It took computer {tries} tries!</Text>
        <Card style={styles.buttonContainer}>
          <Button title="Go back" onPress={() => props.onGoBack("true")} />
        </Card>
      </View>
    );
  } else {
    // get number from the user input
    return (
      <View style={styles.screen}>
        <Text>Computer's Choice:</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <Button title="Lower" onPress={combinedLow} />
          <Button title="Higher" onPress={combinedHigh} />
        </Card>
        <Button title="Go back" onPress={() => props.onGoBack("true")} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
