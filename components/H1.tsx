import { Text, StyleSheet } from "react-native";
import { TextProps } from "./Themed";

export default function H1({ ...props }: TextProps) {
  return <Text {...props} style={[styles.h1, props.style]}></Text>;
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 27,
    color: "#000000",
  },
});
