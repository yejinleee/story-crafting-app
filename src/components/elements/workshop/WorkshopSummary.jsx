import React from "react";
import { Modal, Pressable, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function WorkshopSummary({ name, description, onClose }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.vacantSpace}
        onPress={onClose && onClose}
      ></Pressable>
      <View onPress={() => {}} style={styles.window}>
        <Text>
          Workshop {name}
          {description}
        </Text>
        <Button  title="Start"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%"
  },
  vacantSpace: {
    height: "10%"
  },
  window: {
    padding: "0.5em",
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    margin: "0em",
    backgroundColor: "lightgrey",
    height: "100%",
    textAlign: "center"
  }
});
