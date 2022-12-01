import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Divider from "../../elements/layout/Divider";
import GridList from "../../elements/layout/GridList";
import Page from "../Page";

export default function Avatar() {
  return (
    <Page>
      <View style={styles.avatarSpace}>
        <View style={styles.avatar}></View>
        <Text>Name</Text>
      </View>
      <Divider />
      <Text style={theme.textVariants.title}>My wardrobe</Text>
      <GridList>{[...Array(16)].map((_, i) => i)}</GridList>
    </Page>
  );
}

const styles = StyleSheet.create({
  avatarSpace: {
    width: "100%",
    height: 256,
    display: "flex",
    textAlign: "center",
    gap: theme.spacing.m
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
