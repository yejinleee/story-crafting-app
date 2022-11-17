import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import Workshop from "../elements/workshop/Workshop";
import Page from "./Page";

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Workshop name={item} />
    </View>
  );
}

export default function Workshops() {
  const [debugCount, setDebugCount] = useState(3);

  function onAddButton() {
    setDebugCount((d) => d + 1);
  }

  return (
    <Page title="Workshops">
      <FlatList
        style={styles.workshopGrid}
        numColumns={2}
        data={[...Array(debugCount)].map((_, i) => "#" + i)}
        renderItem={Item}
      />
      <Button title="Add" onPress={onAddButton}/>
    </Page>
  );
}

const styles = StyleSheet.create({
  workshopGrid: {
    width: "100%"
  },
  item: {
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    padding: 4
  }
});
