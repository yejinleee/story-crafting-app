import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/theme.style";

export default function Page({ title, children }) {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    height: "100%",
    width: "100%",
    padding: theme.spacing.m,
    backgroundColor: theme.colors.background,
    display: "flex",
    flex: 1
  }
});
