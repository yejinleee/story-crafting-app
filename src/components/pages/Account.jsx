import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, FlatList } from "react-native-web";
import Divider from "../elements/layout/Divider";
import Workshop from "../elements/workshop/Workshop";
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
      <Button title="Add" onPress={onAddButton} />
    </Page>
  );
}

const styles = StyleSheet.create({
  avatarSpace: {
    width: "100%",
    display: "flex",
    gap: 20,
    alignItems: "center"
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: "blue"
  },
  item: {
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    padding: 4
  }
});
