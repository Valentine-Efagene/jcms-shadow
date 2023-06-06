import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IOnboardingTab } from "../../constants/Types";
import PrimaryButton from "../buttons/PrimaryButton";
export const onboardingFinalName = "OnboardingFinal";

const Onboarding2 = ({ onNext }: IOnboardingTab) => {
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

export default Onboarding2;

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
