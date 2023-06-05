import { StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface IStepper extends ViewProps {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  options: number[];
}

const Stepper = ({ current, setCurrent, options }: IStepper) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => setCurrent(option)}
          style={current === option ? styles.active : styles.nonActive}
        ></TouchableOpacity>
      ))}
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "auto",
    gap: 4,
  },
  active: {
    width: 16,
    height: 5,
    backgroundColor: "#151646",
    borderRadius: 3,
  },
  nonActive: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#D9D9D9",
  },
});
