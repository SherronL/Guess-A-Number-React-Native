import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10
  },
  number: {
    fontSize: 70,
    fontWeight: "bold",
    alignSelf: "center"
  }
});

export default NumberContainer;
