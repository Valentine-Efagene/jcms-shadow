import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Text, View } from "../../components/Themed";
import PasswordInput from "../../components/inputs/PasswordInput";
import Label from "../../components/Label";
import PrimaryInput from "../../components/inputs/PrimaryInput";
import { ScrollView } from "react-native-gesture-handler";
import H1 from "../../components/H1";
import OutlineButton from "../../components/buttons/OutineButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link } from "expo-router";

export default function Registration() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.crm}>
          <Text style={styles.crmText}>CRM</Text>
        </View>
        <View style={styles.main}>
          <H1>Create an Account.</H1>
          <View style={styles.form}>
            <Label>Full Name</Label>
            <PrimaryInput />
            <Label>Email or Phone Number</Label>
            <PrimaryInput />
            <Label>Password</Label>
            <PasswordInput />
            <Label>Confirm Password</Label>
            <PasswordInput />
          </View>
          <PrimaryButton title="Login" />
          <Text style={{ textAlign: "center" }}>OR</Text>

          <OutlineButton
            title="Sign up with Google"
            leftIconSource={require("../../assets/images/logos_google-icon.png")}
          />
        </View>
        <Text style={styles.redirection}>
          Already have an account? <Link href={"/login"}>Sign in</Link>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    display: "flex",
    paddingBottom: 100,
  },
  crm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "auto",
    height: 200,
    backgroundColor: "#151646",
  },
  crmText: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 33,
    color: "#FFFFFF",
  },
  main: {
    display: "flex",
    gap: 18,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  form: {
    display: "flex",
    gap: 16,
  },
  redirection: {
    textAlign: "center",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: "#1B1C1E",
  },
});
