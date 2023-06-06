import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState, useMemo } from "react";
import Stepper from "../Stepper";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import OnboardingFinal from "./OnboardingFinal";

export const onboardingFinalName = "OnboardingFinal";

const Onboarding = () => {
  const [current, setCurrent] = useState(0);

  const options = useMemo(() => [0, 1, 2], []);

  const onNext = () =>
    setCurrent((prevState) =>
      prevState > options.at(-1)! ? prevState : prevState + 1
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Stepper
          options={options}
          style={styles.stepper}
          current={current}
          setCurrent={setCurrent}
        />
        {current === 0 && <Onboarding2 onNext={onNext} />}
        {current === 1 && <Onboarding3 onNext={onNext} />}
        {current === 2 && <OnboardingFinal />}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingBottom: 80,
  },
  content: {
    padding: 16,
    display: "flex",
    gap: 16,
    marginTop: "auto",
    height: "40%",
    marginBottom: 50,
  },
  stepper: {},
});
