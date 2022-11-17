import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/theme.style";

export default function Page({ title, children }) {
  return (
    <View style={styles.container}>
      {/* <Text>
        <h1>{title}</h1>
      </Text> */}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    width: "100vw",
    padding: "1em",
    backgroundColor: theme.colors.background,
    flex: 2
  }
});
