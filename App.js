import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import NumberContainer from "./components/NumberContainer";

export default function App() {
  const [userNumber, setUserNumber] = useState(); // default is false
  const [tries, setTries] = useState();
  const [goBack, setGoBack] = useState();

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setTries(0);
  };

  const gameOverHandler = numOfTries => {
    setTries(numOfTries);
  };

  // go back state manager
  const goBackHandler = status => {
    setGoBack(status);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />; // default output

  if (userNumber && tries <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGoBack={goBackHandler}
        onGameOver={gameOverHandler}
      />
    );
    // value not updating for some reason
    if (goBack) {
      content = <StartGameScreen onStartGame={startGameHandler} />;
      setGoBack("false");
    } else if (tries > 0) {
      content = <GameOverScreen />;
    }
  }

  return (
    // to display either StartGameScreen or GameScreen, useState

    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // since main view, occupy full screen
    flex: 1
  }
});
