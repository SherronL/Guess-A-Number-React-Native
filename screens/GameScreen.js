import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

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

  const [tries, setTries] = useState(0);

  // updates references here and take the joint
  // component doesnt rerender when state changes like useState
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const currentTries = useRef(0);

  // desctructure the props
  // taking props and store them in the const of same names
  const { userChoice, onGameOver } = props;

  // useEffect takes a function by default
  // that runs after every render cycle
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(tries);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    // if user chooses lower and the userChoise is higher than the guess
    if (
      (direction === "Lower" && currentGuess < props.userChoice) ||
      (direction === "Higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("You're a liar", "Try again", [
        { text: "Sowwy", style: "cancel" }
      ]);
      return;
    }

    if (direction === "Lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    currentTries.current++;
    setTries(curTries => curTries + 1);
  };

  // if (currentGuess === props.userChoice) {
  //   return (
  //     <View style={styles.screen}>
  //       <Text>It took computer {currentTries.current} tries!</Text>
  //       <Card style={styles.buttonContainer}>
  //         <Button title="Go back" onPress={() => props.onGoBack("true")} />
  //       </Card>
  //     </View>
  //   );
  // }
  // get number from the user input
  return (
    <View style={styles.screen}>
      <Text>Computer's Choice:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={nextGuessHandler.bind(this, "Lower")} />
        <Button
          title="Higher"
          onPress={nextGuessHandler.bind(this, "Higher")}
        />
      </Card>
      <Button title="Go back" onPress={() => props.onGoBack("true")} />
    </View>
  );
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
