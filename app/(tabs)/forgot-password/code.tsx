import { StyleSheet } from "react-native";
import { View } from "../../../components/Themed";
import Email from "../../../components/forms/Email";
import PrimaryInput from "../../../components/inputs/PrimaryInput";
import Label from "../../../components/Label";
import OutlineButton from "../../../components/buttons/OutineButton";

export default function () {
  return (
    <View style={styles.container}>
      <Email />
      <Label>Enter 6 digit Code sent to hyd*****@gmail.com </Label>
      <PrimaryInput secureTextEntry={true} />
      <OutlineButton title="Proceed" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
});
