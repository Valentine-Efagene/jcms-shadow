// https://medium.com/@peterpme/taming-react-natives-scrollview-with-flex-144e6ff76c08

import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
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
  const snapPoints = useMemo(() => ["60%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.crm}>
        <Text style={styles.crmText}>CRM</Text>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.bottomSheet}>
          <ScrollView contentContainerStyle={styles.content}>
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
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#151646",
  },
  crm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "auto",
    height: "40%",
  },
  crmText: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 33,
    color: "#FFFFFF",
  },
  bottomSheet: {
    flex: 1,
    textAlign: "left",
  },
  stepper: {},
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
    padding: 16,
    gap: 16,
    marginBottom: 50,
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
});
