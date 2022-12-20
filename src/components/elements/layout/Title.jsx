import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "./Card";

export default function Title({ text, style, children }) {
  return (
    <View
      style={[
        styles.title,
        children
          ? { justifyContent: "space-between" }
          : { justifyContent: "center" },
        style
      ]}
    >
      <Text style={styles.text}>{text}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: theme.colors.accent.blue,
    borderWidth: 0,
    borderRadius: 1000,
    borderColor: "",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 2
  },
  flex: {
    justifyContent: "space-between"
  },
  unflex: {},
  text: {
    fontSize: theme.fontSize.m,
    fontStyle: "bold",
    fontWeight: 500,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs
  }
});
