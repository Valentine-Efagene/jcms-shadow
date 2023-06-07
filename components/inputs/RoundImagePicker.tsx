import { StyleSheet, TouchableOpacityProps, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IRoundImagePicker extends TouchableOpacityProps {
  onPress: () => void;
  image?: string | null;
}

export default function RoundImagePicker({
  onPress,
  image,
  style,
}: IRoundImagePicker) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.iconWrapper}>
          <Ionicons
            style={styles.icon}
            name="ios-camera-outline"
            size={20}
            color="#ffffff"
          />
        </View>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#D9D9D9",
  },
  image: { width: 70, height: 70, borderRadius: 35 },
  iconWrapper: {
    position: "absolute",
    backgroundColor: "#08093C",
    right: -7,
    bottom: 3,
    zIndex: 1,
    borderRadius: 15,
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  icon: {},
});
