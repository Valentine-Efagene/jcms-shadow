import { Text, StyleSheet } from "react-native";
import { TextProps } from "./Themed";

export default function Label({ ...props }: TextProps) {
  return <Text {...props} style={[styles.h1, props.style]}></Text>;
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 19,
    color: "#000000",
  },
});
