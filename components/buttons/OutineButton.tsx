import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { IButtonProps } from "../../constants/Types";

const OutlineButton = ({ ...props }: IButtonProps) => (
  <TouchableOpacity
    {...props}
    style={[styles.container, props.disabled ? styles.disabled : null]}
  >
    {props.leftIconSource && (
      <Image style={styles.icon} source={props.leftIconSource} />
    )}
    {props.title && (
      <Text style={[styles.text, props.disabled ? styles.disabledText : null]}>
        {props.title}
      </Text>
    )}
    {props.rightIconSource && (
      <Image style={styles.icon} source={props.rightIconSource} />
    )}
    {props.children}
  </TouchableOpacity>
);

export default OutlineButton;

const PADDING = 6;
const FONT_SIZE = 16;
const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  container: {
    minHeight: 44,
    borderColor: "#151646",
    borderWidth: 1,
    width: "100%",
    padding: PADDING,
    backgroundColor: "#00000000",
    borderRadius: BORDER_RADIUS,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    flexWrap: "nowrap",
  },
  text: {
    textAlign: "center",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: FONT_SIZE,
    lineHeight: 22,
    color: "#151646",
  },
  disabled: {
    backgroundColor: "#00000000",
  },
  disabledText: {
    color: "#1B1C1E7F",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: FONT_SIZE,
    lineHeight: 22,
    textAlign: "center",
  },
  icon: {
    borderRadius: 12,
    width: 24,
    height: 24,
  },
});
