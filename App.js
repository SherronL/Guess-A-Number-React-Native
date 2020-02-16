import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(); // default is false

  const [goBack, setGoBack] = useState();

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const goBackHandler = status => {
    setGoBack(status);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />; // default output

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} onGoBack={goBackHandler} />;
  }

  if (goBack) {
    content = <StartGameScreen onStartGame={startGameHandler} />;
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
