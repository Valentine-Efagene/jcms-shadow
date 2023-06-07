import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import { Link, usePathname } from "expo-router";
import { Text } from "./Themed";

interface IStepper extends ViewProps {
  tabs: string[];
}

const TabStepper = (props: IStepper) => {
  const { tabs } = props;
  const path = usePathname();

  return (
    <View {...props} style={[styles.container, props.style]}>
      {tabs.map((tab) => (
        <Link href={tab} asChild key={tab}>
          <Pressable
            style={path === tab ? styles.active : styles.nonActive}
          ></Pressable>
        </Link>
      ))}
    </View>
  );
};

export default TabStepper;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "auto",
    gap: 4,
    justifyContent: "center",
  },
  active: {
    width: 16,
    height: 5,
    backgroundColor: "#151646",
    borderRadius: 3,
  },
  nonActive: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#D9D9D9",
  },
});
