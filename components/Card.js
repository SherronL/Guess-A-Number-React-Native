import React from "react";
import { View, StyleSheet } from "react-native";

// style component

const Card = props => {
  // pulls existing styles to card style
  return (
    // arg1 copies all styles in card in this new obj
    // arg2 and takes all styles defined in props.style into this obj, override arg1
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 40,
    borderRadius: 10,
    // shadow props only work for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // add elevation for android use
    elevation: 5,
    backgroundColor: "white"
  }
});

export default Card;
