import { StyleSheet, TextInputProps } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { View } from "../Themed";

const PasswordInput = ({ ...props }: TextInputProps) => (
  <View style={styles.container}>
    <TextInput {...props} style={styles.primaryInput} />
  </View>
);

export { PasswordInput };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    display: "flex",
    flexDirection: "row",
  },
  primaryInput: {
    flex: 1,
    minHeight: 44,
    borderRadius: 5,
    paddingHorizontal: 16,
  },
});
