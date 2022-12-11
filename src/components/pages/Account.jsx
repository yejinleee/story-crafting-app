import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { theme } from "../../style/theme.style";
import MainButton from "../elements/button/NextStepButton";
import Divider from "../elements/layout/Divider";
import Page from "./Page";

export default function Account() {
  const [seed, setSeed] = useState(0);

  function onAddButton() {
    setSeed((d) => d + 1);
  }

  return (
    <Page title="Account">
      <View style={styles.avatarSpace}>
        <Image
          onPress={onAddButton}
          style={styles.avatar}
          source={`https://avatars.dicebear.com/api/micah/${seed}.svg`}
        />
        <Text>name</Text>
      </View>
      <Divider/>
      <MainButton title="Refresh" onPress={onAddButton} />
    </Page>
  );
}

const styles = StyleSheet.create({
  avatarSpace: {
    width: "100%",
    display: "flex",
    gap: theme.spacing.l,
    alignItems: "center"
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: "blue"
  }
});
