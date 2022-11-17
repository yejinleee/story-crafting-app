import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import WorkshopSummary from "./WorkshopSummary";

export default function Workshop({ name }) {
  const [opened, setOpened] = useState(false);

  function onOpenButton() {
    setOpened(true);
  }

  return (
    <TouchableOpacity onPress={onOpenButton} style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={opened}
        onRequestClose={() => setOpened(false)}
      >
        <WorkshopSummary
          name={name}
          description="This is the workshop description where you can find information about what it is"
          onClose={() => setOpened(false)}
        />
      </Modal>
      <Text>
        <h2>Workshop {name}</h2>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "0.5em",
    borderRadius: 12,
    backgroundColor: "lightgrey",
    width: "100%"
  }
});
