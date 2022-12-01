import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";

export default function Calendar() {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.m,
    padding: theme.spacing.l,
    textAlign: "center"
  }
});
