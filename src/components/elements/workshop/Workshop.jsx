import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import WorkshopSummary from "./WorkshopSummary";

export default function Workshop({ name, description, stars, rightAligned, icon}) {
  const [opened, setOpened] = useState(false);

  function onOpenButton() {
    return; //disabled
    setOpened(true);
  }

  return (
    <TouchableOpacity
      onPress={onOpenButton}
      style={[
        styles.container,
        rightAligned ? { flexDirection: "row-reverse" } : {}
      ]}
    >
      <View style={styles.icon}>
        <Ionicons
          color={theme.colors.background}
          name={icon}
          size={48}
        />
      </View>
      <View style={rightAligned ? { textAlign: "right" } : {}}>
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
          <b>{name}</b>
        </Text>
        <Text>{description}</Text>
        <br />
        <View style={rightAligned ? {display: "flex", flexDirection: "row-reverse"} : {}}>
          <View style={[styles.starContainer]}>
            {[...Array(3)].map((_, i) => (
              <Ionicons
                color={theme.colors.accent.yellow}
                name={i >= stars ? "star-outline" : "star"}
              />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.l,
    paddingRight: theme.spacing.l * 2,
    paddingLeft: theme.spacing.l * 2,
    borderRadius: 12,
    // backgroundColor: "lightgrey",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.m
  },
  icon: {
    backgroundColor: theme.colors.accent.yellow,
    borderRadius: 1000,
    aspectRatio: "1 / 1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.m
  },
  starContainer: {
    borderColor: theme.colors.accent.blue,
    borderWidth: 1,
    width: "min-content",
    paddingLeft: theme.spacing.s,
    paddingRight: theme.spacing.s,
    borderRadius: 10000,
    display: "flex",
    flexDirection: "row",
    alignSelf: "right"
  }
});
