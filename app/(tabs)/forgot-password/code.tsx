import { StyleSheet } from "react-native";
import { View, Text } from "../../../components/Themed";
import Email from "../../../components/forms/Email";
import { PrimaryInput } from "../../../components/inputs/PrimaryInput";
import { OutlineButton } from "../../../components/AppButton";

export default function () {
  return (
    <View style={styles.container}>
      <Email />
      <Text style={styles.label}>
        Enter 6 digit Code sent to hyd*****@gmail.com{" "}
      </Text>
      <PrimaryInput placeholder="" inputMode="none" />
      <OutlineButton title="Proceed" />
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
  },
});
