import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "./Card";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ItemList({ title, children, elements, onSelect }) {
  const [selected, setSelected] = useState();

  const selectedStyle = {
    backgroundColor: "transaparent",
    borderColor: theme.colors.accent.yellow
  };
  const unselectedStyle = {
    backgroundColor: theme.colors.accent.blue,
    borderColor: theme.colors.accent.blue
  };
  const emptyStyle = {
    backgroundColor: "transaparent",
    borderColor: theme.colors.accent.gray,
  }

  const Item = ({ item }) => {
    const isEmpty = item >= elements.length;
    let itemStyle = isEmpty && emptyStyle;

    if (!isEmpty)
      itemStyle = item === selected ? selectedStyle : unselectedStyle;

    return <Card
      style={{
        textAlign: "center",
        borderWidth: 6,
        flex: 1,
        margin: theme.spacing.s,
        width: "auto",
        aspectRatio: "1/1",
        ...(itemStyle)
      }}
    >
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={() => {
          if (isEmpty || !onSelect) return;
          setSelected(item);
          onSelect(item, elements[item]?.key);
        }}
      >
        {!isEmpty ? (
          elements[item]
        ) : (
          <Ionicons
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            size={48}
            color={theme.colors.accent.gray}
            name="lock-closed-outline"
          ></Ionicons>
        )}
      </TouchableOpacity>
    </Card>
  };

  console.log("elements", elements);
  return (
    <View>
      <Text style={{ marginLeft: theme.spacing.m }}>{title}</Text>
      <Card>
        <FlatList
          style={{ width: "100%" }}
          numColumns={5}
          data={[...elements, ...Array(5 - (elements.length % 5))].map(
            (_, i) => i
          )}
          renderItem={Item}
        />
      </Card>
    </View>
  );
}
