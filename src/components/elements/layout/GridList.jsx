import { FlatList, View } from "react-native";
import { theme } from "../../../style/theme.style";

export default function GridList({ children }) {
  const Item = ({ item }) => (
    <View
      style={{
        borderRadius: 1000,
        textAlign: "center",
        backgroundColor: item >= 2 ? theme.colors.card : theme.colors.primary,
        flex: 1,
        margin: theme.spacing.s,
        width: "auto",
        aspectRatio: "1/1"
      }}
    ></View>
  );

  return (
    <View style={{ ...theme.style.card }}>
      <FlatList
        style={{ width: "100%" }}
        numColumns={4}
        data={children.map((_, i) => i)}
        renderItem={Item}
      />
    </View>
  );
}
