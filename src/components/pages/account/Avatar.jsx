import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";

export default function Avatar() {
  const Item = ({ item }) => (
    <View
      style={{
        borderRadius: 1000,
        textAlign: "center",
        // padding: theme.spacing.s,
        backgroundColor: theme.colors.card,
        flex: 1,
        margin: theme.spacing.l,
        width: "auto",
        aspectRatio: "1/1",
        // height: Dimensions.get('window').width / 4,
      }}
    >
      <Text>{item}</Text>
    </View>
  );

  return (
    <Page>
      <View style={styles.avatarSpace}>
        <View style={styles.avatar}></View>
        <Text>Name</Text>
      </View>
      <Divider />
      <Text>My wardrobe</Text>
      <View style={{ ...theme.style.card }}>
        <FlatList
          style={{ width: "100%", gap: 10 }}
          numColumns={4}
          data={[...Array(12)].map((_, i) => "#" + i)}
          renderItem={Item}
        />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  avatarSpace: {
    width: "100%",
    height: "45%",
    display: "flex",
    textAlign: "center",
    gap: theme.spacing.l
  },
  avatar: {
    flex: 1,
    borderRadius: 1000,
    backgroundColor: theme.colors.card,
    aspectRatio: "1/1",
    marginHorizontal: "auto"
  },
  wardrobe: {
    display: "grid"
  }
});
