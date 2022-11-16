import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Button, TouchableOpacity } from "react-native-web";

export default function WorkshopSummary({ name, description, onClose }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.vacantSpace}
        onPress={onClose && onClose}
      ></Pressable>
      <View onPress={() => {}} style={styles.window}>
        <Text>
          <h2>Workshop {name}</h2>
          <p>{description}</p>
        </Text>
        {/* <Button onPress={onClose && onClose} title="Close"></Button> */}
        <br/>
        <Button title="Start"></Button>
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
