import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import PrimaryInput from "../inputs/PrimaryInput";
import PrimaryButton from "../buttons/PrimaryButton";
import Label from "../Label";

export default function () {
  return (
    <View style={styles.container}>
      <Label>Please enter your Email phone number</Label>
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
  content: {
    backgroundColor: "#F7F7F7",
    padding: 12,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  input: {},
});
