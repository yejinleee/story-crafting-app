import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Page({ title, children }) {
  return (
    <View style={styles.container}>
      <Text>
        {title}
      </Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "100vh",
    // width: "100vw",
    // padding: "1em",
    flex: 2
  }
});
