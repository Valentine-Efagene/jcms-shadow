import { StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { Text, View } from "../../../components/Themed";
import { useCallback, useMemo, useRef, useState } from "react";
import { Slot } from "expo-router";
import TabStepper from "../../../components/TabStepper";

export default function TabOneScreen() {
  // state
  // const [current, setCurrent] = useState("email");
  // const [isOpen, setIsOpen] = useState(true);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["80%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open</Text>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.bottomSheet}>
          <View style={styles.content}>
            <Text style={styles.title}>Forgot Password</Text>
            <Slot />
            <TabStepper
              style={styles.stepper}
              tabs={[
                "/forgot-password",
                "/forgot-password/code",
                "/forgot-password/change",
              ]}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#151646",
  },
  bottomSheet: {
    flex: 1,
    textAlign: "left",
  },
  stepper: {
    marginTop: "auto",
    marginBottom: 50,
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
    display: "flex",
  },
  title: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "400",
    maxWidth: 200,
    fontSize: 20,
    lineHeight: 27,
    color: "#000000",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
