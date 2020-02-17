import React from "react";
import { view, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
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
  }
});

export default GameOverScreen;
