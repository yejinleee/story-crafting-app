import { FlatList, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "./Card";

export default function GridList({ title, children }) {
  const Item = ({ item }) => (
    <Card
      style={{
        textAlign: "center",
        backgroundColor: item >= 2 ? "" : theme.colors.accent.blue,
        borderColor: item >= 2 ? theme.style.card.borderColor : theme.colors.accent.blue,
        flex: 1,
        margin: theme.spacing.s,
        width: "auto",
        aspectRatio: "1/1"
      }}
    ></Card>
  );

  return (
    <View>
      <Text style={{marginLeft: theme.spacing.m}}>{title}</Text>
      <Card>
        <FlatList
          style={{ width: "100%" }}
          numColumns={5}
          data={children.map((_, i) => i)}
          renderItem={Item}
        />
      </Card>
    </View>
  );
}
