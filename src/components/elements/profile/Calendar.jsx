import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "../layout/Card";

export default function Calendar() {
  return (
    <Card shadow={true} style={styles.container}>
      <Text>Calendar</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center"
  }
});
