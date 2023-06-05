import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { PrimaryButton } from "../../components/AppButton";
import { IOnboardingTab } from "../../constants/Types";
export const onboardingFinalName = "OnboardingFinal";

const Onboarding3 = ({ onNext }: IOnboardingTab) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet uctus venenatis
      </Text>
      <PrimaryButton title="Next" onPress={onNext} />
      <PrimaryButton disabled title="Skip" />
    </View>
  );
};

export default Onboarding3;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
    marginTop: "auto",
  },
  stepper: {},
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
