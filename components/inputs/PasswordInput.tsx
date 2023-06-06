import { StyleSheet, TextInputProps } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { View } from "../Themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

const PasswordInput = ({ ...props }: TextInputProps) => {
  const [isSecure, setIsSsecure] = useState(false);

  const toggleSecureMode = () => setIsSsecure((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <TextInput secureTextEntry={isSecure} {...props} style={styles.input} />
      <TouchableOpacity onPress={toggleSecureMode} style={styles.button}>
        <FontAwesome
          style={styles.eye}
          name={isSecure ? "eye-slash" : "eye"}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    flex: 1,
    minHeight: 44,
    paddingLeft: 16,
    paddingRight: 50,
    borderRadius: 5,
  },
  button: {
    height: "100%",
    position: "absolute",
    right: 10,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  eye: {},
});
