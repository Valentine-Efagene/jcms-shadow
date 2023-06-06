import { StyleSheet, TextInputProps } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const PrimaryInput = ({ ...props }: TextInputProps) => (
  <TextInput {...props} style={[styles.primaryInput, props.style]} />
);

export default PrimaryInput;

const styles = StyleSheet.create({
  primaryInput: {
    flex: 1,
    minWidth: 0,
    minHeight: 44,
    borderRadius: 5,
    fontFamily: "Manrope",
    fontSize: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F7F7F7",
  },
});
