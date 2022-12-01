import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../../style/theme.style";
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
        Workshop {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.l,
    borderRadius: 12,
    backgroundColor: "lightgrey",
    width: "100%"
  }
});