import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "./Card";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Dimensions} from 'react-native';

const screenDimensions = Dimensions.get('screen');

export default function ItemList({ title, children, elements, onSelect }) {
  const [selected, setSelected] = useState();
  const [columns, setColumns] = useState(5);
  const [screenWidth, setScreenWidth] = useState();

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

  useEffect(() => {
    if (!screenWidth) return;
    setColumns(parseInt(screenWidth / 100));
  }, [screenWidth]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window}) => {
        setScreenWidth(window.width);
      },
    );
    return () => subscription?.remove();
  });

  const Item = ({ item }) => {
    const isEmpty = item >= elements.length;
    let itemStyle = isEmpty && emptyStyle;

    if (!isEmpty)
      itemStyle = item === selected ? selectedStyle : unselectedStyle;

    return <Card
      style={{
        textAlign: "center",
        borderWidth: 5,
        flex: 1,
        margin: theme.spacing.s,
        width: "auto",
        padding: 0,
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

  // console.log("elements", elements);
  return (
    <View>
      <Text style={{ marginLeft: theme.spacing.m }}>{title}</Text>
      <Card>
        <FlatList
          key={columns}
          style={{ width: "100%" }}
          numColumns={columns}
          data={[...elements, ...Array(columns - (elements.length % columns))].map(
            (_, i) => i
          )}
          renderItem={Item}
        />
      </Card>
    </View>
  );
}
