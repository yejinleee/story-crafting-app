import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "../layout/Card";
import Title from "../layout/Title";

export default function Calendar() {
  return (
    <Card shadow={true} style={styles.container}>
      <Title style={{backgroundColor: theme.colors.accent.green}} text="December"><Text>{"< >  "}</Text></Title>
      <Title style={{paddingHorizontal: theme.spacing.m, backgroundColor: theme.colors.accent.yellow}}>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => <Text key={index}>{day}</Text>)}</Title>
      <Card>
        
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center"
  }
});
