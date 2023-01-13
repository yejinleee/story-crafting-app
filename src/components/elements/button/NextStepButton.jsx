import {View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme, palette } from "../../../style/theme.style";

export default function NextStepButton({ title, ...props }) {
  return (
    <View style={{alignItems: 'center', paddingBottom: 63}}>
      <TouchableOpacity {...props} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 50,
    borderRadius: 20,
    backgroundColor: palette.blue,
    marginVertical: theme.spacing.xs,
  },
  text: {
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing.l,
    color: 'black',
    fontWeight:'bold',
  },
});
