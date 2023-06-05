import { StyleSheet } from "react-native";
import { View, Text } from "../../../components/Themed";
import { PrimaryInput } from "../../../components/inputs/PrimaryInput";
import { PrimaryButton } from "../../../components/AppButton";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create Password</Text>
      <PrimaryInput placeholder="" />
      <Text style={styles.label}>Confirm Password</Text>
      <PrimaryInput placeholder="" />
      <PrimaryButton title="Done" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  label: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 19,
    color: "#000000",
  },
});
