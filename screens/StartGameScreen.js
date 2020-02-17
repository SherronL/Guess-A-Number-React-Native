import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TextBase,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/input";
import NumberContainer from "../components/NumberContainer";
import GameScreen from "../screens/GameScreen";

const StartGameScreen = props => {
  // entering
  const [enteredValue, setEnteredValue] = useState("");
  // check if confirmed
  const [confirmed, setConfirmed] = useState(false);
  // after pressing submit
  const [selectedNumber, setSelectedNumber] = useState("");

  const numberInputHandler = inputNumber => {
    // replace anything thats not a number 0-9 globally to empty string
    setEnteredValue(inputNumber.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    // input validation
    // convertes input to int, and check again if input is number
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert("You fucking donkey", "Enter a number between 1 and 99", [
        { text: "Sowwy", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    // console.log(selectedNumber);

    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={styles.message}>You selected:</Text>
        <NumberContainer // passed to props.children in corresponding component
        >
          {selectedNumber}
        </NumberContainer>

        <View>
          <Button
            title={"START GAME"}
            onPress={() => props.onStartGame(selectedNumber)}
          />
        </View>
      </Card>
    );
  }

  return (
    // wraps the whole screen aroudn this API and
    // dismiss the keyboad when touched anywhere else
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a number between 1 and 99</Text>
          <Input
            style={styles.input}
            blurOnSubmit // android keyboard hide
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start" // default
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  button: {
    width: 100,
    borderColor: "black",
    borderWidth: 1
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    margin: 20
  },
  message: {
    alignSelf: "center",
    fontSize: 20
  }
});

export default StartGameScreen;
