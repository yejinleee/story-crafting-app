import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "./Card";
import { useState } from "react";

export default function ItemList({ title, children, elements, onSelect }) {
  const [selected, setSelected] = useState();

  const Item = ({ item }) => (
    <Card
      style={{
        textAlign: "center",
        backgroundColor: item === selected ? theme.colors.accent.blue : "transparent",
        borderColor: theme.style.card.borderColor,
        flex: 1,
        margin: theme.spacing.s,
        width: "auto",
        padding: 0,
        aspectRatio: "1/1"
      }}
    >
      <TouchableOpacity style={{width: "100%", height: "100%"}} onPress={() => {setSelected(item); onSelect(item, elements[item]?.key)}}>
        {elements[item]}
      </TouchableOpacity>
    </Card>
  );

  // console.log("elements", elements);
  return (
    <View>
      <Text style={{ marginLeft: theme.spacing.m }}>{title}</Text>
      <Card>
        <FlatList
          style={{ width: "100%" }}
          numColumns={5}
          data={elements.map((_, i) => i)}
          renderItem={Item}
        />
      </Card>
    </View>
  );
}
