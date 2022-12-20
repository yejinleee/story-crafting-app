import { StyleSheet, Text } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "./Card";

export default function Title({ text, children }) {
  return (
    <Card
      style={[
        styles.title,
        children
          ? { justifyContent: "space-between" }
          : { justifyContent: "center" }
      ]}
      round={true}
    >
      <Text style={styles.text}>{text}</Text>
      {children}
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: theme.colors.accent.blue,
    borderWidth: 0,
    borderColor: "",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  flex: {
    justifyContent: "space-between"
  },
  unflex: {},
  text: {
    fontSize: theme.fontSize.m,
    fontStyle: "bold",
    fontWeight: 500
  }
});
