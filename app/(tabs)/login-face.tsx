import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Text, View } from "../../components/Themed";
import PasswordInput from "../../components/inputs/PasswordInput";
import Label from "../../components/Label";
import { ScrollView } from "react-native-gesture-handler";
import H1 from "../../components/H1";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link } from "expo-router";

export default function LoginFace() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.crm}>
          <Text style={styles.crmText}>CRM</Text>
        </View>
        <View style={styles.main}>
          <H1>Welcome back, Ibrahim</H1>
          <View style={styles.form}>
            <Label>Password</Label>
            <PasswordInput />
          </View>
          <Link style={{ marginLeft: "auto" }} href="/forgot-password">
            Forgot Password?
          </Link>
          <PrimaryButton title="Login" />
          <Text style={styles.redirection}>
            Not Ibrahim? <Link href={""}>Switch Account</Link>
          </Text>
          <Image
            style={styles.image}
            source={require("../../assets/images/face.png")}
          />
        </View>
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
  image: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
});
