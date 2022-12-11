import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/theme.style";

export default function Page({ title, children }) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // padding: theme.spacing.m,
    backgroundColor: theme.colors.background,
    flex: 2
  }
});
