import { StyleSheet, TextInputProps } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const PrimaryInput = ({ ...props }: TextInputProps) => (
  <TextInput {...props} style={styles.primaryInput} />
);

export { PrimaryInput };

const styles = StyleSheet.create({
  primaryInput: {
    flex: 1,
    minHeight: 44,
    borderRadius: 5,
    paddingHorizontal: 16,
    backgroundColor: "#F7F7F7",
  },
});
