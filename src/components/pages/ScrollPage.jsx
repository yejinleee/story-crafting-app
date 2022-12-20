import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/theme.style";

export default function ScrollPage({ title, children }) {
  return (
    <ScrollView style={{flex:1, backgroundColor: '#FFFFFF', paddingVertical: theme.spacing.m}}>
      <View style={styles.container}>
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    height: "100%",
    paddingHorizontal: theme.spacing.m,
    backgroundColor: theme.colors.background,
    flex: 1,
    display: "inline-flex",
    flexDirection: "column",
    gap: theme.spacing.m
  }
});
