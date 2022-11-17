import React from "react";
import { Modal, Pressable, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function Activity({ name, description, onClose }) {
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
        <br />
        <Button title="Start"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
