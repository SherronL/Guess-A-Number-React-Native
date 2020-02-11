import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => {
  return (
    <TextInput
      {...props} // takes props its getting and spread to the component
      style={{ ...styles.input, ...props.style }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 20
  }
});

export default Input;
