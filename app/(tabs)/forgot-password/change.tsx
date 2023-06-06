import { StyleSheet } from "react-native";
import { View } from "../../../components/Themed";
import PrimaryInput from "../../../components/inputs/PrimaryInput";
import Label from "../../../components/Label";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

export default function () {
  return (
    <View style={styles.container}>
      <Label>Create Password</Label>
      <PrimaryInput secureTextEntry={true} />
      <Label>Confirm Password</Label>
      <PrimaryInput secureTextEntry={true} />
      <PrimaryButton title="Done" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
