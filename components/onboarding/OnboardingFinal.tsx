import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import OutlineButton from "../buttons/OutineButton";
export const onboardingFinalName = "OnboardingFinal";

const OnboardingFinal = () => {
  const [current, setCurrent] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet uctus venenatis
      </Text>
      <PrimaryButton title="Register" />
      <OutlineButton title="Login" />
    </View>
  );
};

export default OnboardingFinal;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
    marginTop: "auto",
  },
  text: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineheight: "19px",
    textAlign: "center",
    color: "#1B1C1E",
    marginTop: "auto",
  },
});
