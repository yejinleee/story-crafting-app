import { Dimensions, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMemo } from "react";

export default function Slider({ value, outOf }) {
  const ratio = useMemo(() => value / outOf, [value, outOf]);

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View
          style={[
            styles.handle,
            { left: (ratio * 100 - ratio * 20).toString() + "%" }
          ]}
        ><Text>{value} / {outOf}</Text></View>
      </View>
      <Ionicons name={"cafe-outline"} color={theme.colors.primary} size={48} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  slider: {
    padding: 0,
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.m
  },
  handle: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.m,
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
