import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// font utility that allows us to load font
import * as Font from "expo-font";
// prolongs loading screen which allows certain tasks
// (ex: loading fonts) to be done
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
  // loadAsync returns a promise
  Font.loadAsync({
    // define a key of our choice and later we can call this
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState(); // default is false
  const [tries, setTries] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  // dont want to render anything else if not finished loading
  if (!dataLoaded) {
    // must call a function that returns a promise
    // expo automatically listens to the promise
    // when promise is resolved it knows the loading is done
    // then it calls onFinish
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setTries(0);
  };

  const gameOverHandler = numOfTries => {
    setTries(numOfTries);
  };

  // resets everything
  const newGameHandler = () => {
    setTries(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />; // default render

  if (userNumber && tries <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={gameOverHandler}
        onRestart={newGameHandler}
      />
    );
  } else if (tries > 0) {
    content = (
      <GameOverScreen
        tries={tries}
        userNumber={userNumber}
        onRestart={newGameHandler}
      />
    );
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
