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
          Workshop {name}
          {description}
        </Text>
        {/* <Button onPress={onClose && onClose} title="Close"></Button> */}
        <Button title="Start"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
