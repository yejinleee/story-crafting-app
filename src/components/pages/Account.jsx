import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { theme } from "../../style/theme.style";
import MainButton from "../elements/button/MainButton";
import Divider from "../elements/layout/Divider";
import Page from "./Page";
import Ionicons from "@expo/vector-icons/Ionicons";
import Calendar from "../elements/profile/Calendar";

export default function Account() {
  const [seed, setSeed] = useState(0);

  function onAddButton() {
    setSeed((d) => d + 1);
  }

  const Selector = ({ icon, name, onClick }) => (
    <View style={styles.selector}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.iconSpace}>
      <Ionicons name={icon} size={48} />
      </View>
    </View>
  );

  return (
    <Page title="Account">
      <View style={styles.avatarSpace}>
        <View style={styles.avatarSelector}>
          <Selector name="Avatar" icon="walk-outline" />
        </View>
        <View style={styles.selectors}>
          <Selector name="Backpack" icon="briefcase-outline" />
          <Selector name="Rewards" icon="trophy-outline" />
        </View>
      </View>
      <Divider />
      <Calendar/>
    </Page>
  );
}

const styles = StyleSheet.create({
  avatarSpace: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "45%",
    gap: theme.spacing.l,
    padding: theme.spacing.l,
    alignItems: "center",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.m
  },
  avatarSelector: {
    flex: 1,
    display: "flex",
    height: "100%",
  },
  title: {
    borderRadius: theme.radius.l,
    paddingVertical: theme.spacing.s,
    marginHorizontal: theme.spacing.l,
    marginTop: theme.spacing.m,
    textAlign: "center",
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.card
  },
  iconSpace: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  selector: {
    flex: 1,
    borderRadius: theme.radius.m,
    backgroundColor: theme.colors.card,
    display: "flex",
  },
  selectors: {
    gap: theme.spacing.l,
    minWidth: "30%",
    display: "flex",
    height: "100%",
    flexDirection: "column"
  }
});
