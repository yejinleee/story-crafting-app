import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, FlatList } from "react-native-web";
import Workshop from "../elements/workshop/Workshop";

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
    <View style={styles.container}>
      <Text>
        <h1>Workshops</h1>
      </Text>
      <FlatList
        style={styles.workshopGrid}
        numColumns={2}
        data={[...Array(debugCount)].map((_, i) => "#" + i)}
        renderItem={Item}
      />
      <Button title="Add" onPress={onAddButton}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    width: "100vw",
    padding: "1em",
    flex: 2
  },
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
