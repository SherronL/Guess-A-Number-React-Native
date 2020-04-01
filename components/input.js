import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => {
  return (
    <TextInput
      {...props} // merging or overwrite multiple styles so one doesnt get overwritten
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
