import { StyleSheet } from "react-native";
import { PrimaryInput } from "../inputs/PrimaryInput";
import { Text, View } from "../Themed";
import { PrimaryButton } from "../AppButton";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Please enter your Email phone number</Text>
      <View style={styles.content}>
        <PrimaryInput inputMode="email" style={styles.input} />
        <PrimaryButton title="Send Code" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
  label: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 19,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  content: {
    backgroundColor: "#F7F7F7",
    padding: 12,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  input: {},
});
