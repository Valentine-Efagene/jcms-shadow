import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ButtonProps,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

const PrimaryButton = ({ ...props }: ButtonProps) => (
  <TouchableOpacity
    style={props.disabled ? styles.disabled : styles.primaryButton}
    {...props}
  >
    <Text
      style={
        props.disabled
          ? styles.disabledPrimaryButtonText
          : styles.primaryButtonText
      }
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);

interface IOutlineButtonProps extends ButtonProps, TouchableOpacityProps {}

const OutlineButton = ({ ...props }: IOutlineButtonProps) => (
  <TouchableOpacity {...props} style={styles.outlineButton}>
    <Text style={styles.outlineButtonText}>{props.title}</Text>
  </TouchableOpacity>
);

export { PrimaryButton, OutlineButton };

const VERTICAL_PADDING = 6;
const PADDING = 6;
const FONT_SIZE = 16;
const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  outlineButton: {
    borderColor: "#151646",
    borderWidth: 1,
    width: "100%",
    padding: PADDING,
    backgroundColor: "#00000000",
    borderRadius: BORDER_RADIUS,
  },
  outlineButtonText: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: FONT_SIZE,
    lineHeight: 22,
    color: "#151646",
    textAlign: "center",
  },
  primaryButton: {
    borderRadius: BORDER_RADIUS,
    backgroundColor: "#151646",
    padding: PADDING,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButtonText: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: FONT_SIZE,
    lineHeight: 22,
    color: "#ffffff",
    textAlign: "center",
  },
  disabled: {
    backgroundColor: "#00000000",
  },
  disabledPrimaryButtonText: {
    color: "#1B1C1E7F",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: FONT_SIZE,
    lineHeight: 22,
    textAlign: "center",
  },
});
