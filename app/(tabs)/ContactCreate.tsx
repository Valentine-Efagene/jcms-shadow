import { StyleSheet, Image, SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Label from "../../components/Label";
import PrimaryInput from "../../components/inputs/PrimaryInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import RoundImagePicker from "../../components/inputs/RoundImagePicker";

export default function ContactCreate() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <RoundImagePicker
          image={image}
          onPress={pickImage}
          style={styles.picker}
        />
        <Label>Field 1:</Label>
        <PrimaryInput />
        <Label>Field 2:</Label>
        <PrimaryInput />
        <Label>Field 3:</Label>
        <PrimaryInput />
        <Label>Field 4:</Label>
        <PrimaryInput />
        <PrimaryButton
          style={styles.submit}
          leftIcon={<AntDesign name="checkcircleo" size={18} color="#ffffff" />}
          title="Save"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    display: "flex",
    gap: 16,
    justifyContent: "space-between",
    padding: 16,
  },
  picker: {
    marginHorizontal: "auto",
  },
  submit: {
    marginTop: 32,
  },
});
