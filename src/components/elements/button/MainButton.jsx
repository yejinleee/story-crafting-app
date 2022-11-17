import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../../style/theme.style";

export default function MainButton({ title, ...props }) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.radius.l,
    backgroundColor: theme.colors.primary,
    marginVertical: theme.spacing.xs
  },
  text: {
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing.l,
    color: theme.colors.primaryForeground
  }
});
