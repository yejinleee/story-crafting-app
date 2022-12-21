import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "../../elements/layout/Card";
import Divider from "../../elements/layout/Divider";
import GridList from "../../elements/layout/GridList";
import MainHeader from "../../elements/layout/MainHeader";
import Title from "../../elements/layout/Title";
import Page from "../Page";
import ScrollPage from "../ScrollPage";

export default function Avatar({navigation}) {
  return (
    <ScrollPage header={<MainHeader onBackButton={navigation.goBack} title="Avatar"/>}>
      <Card shadow={true}>
        <Title
          text="Avatar"
          style={{ backgroundColor: theme.colors.accent.red }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "cneter",
            alignItems: "center",
            padding: theme.spacing.m,
            fontStyle: "italic"
          }}
        >
          Avatar to be added
        </View>
        <Card>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              fontWeight: 500,
              marginBottom: theme.spacing.m
            }}
          >
            Avatar 1204
          </Text>
          <Text>Something about student</Text>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: theme.spacing.m,
              fontStyle: "italic"
            }}
          >
            Cannot edit yet
          </Text>
        </Card>
      </Card>
      <Card shadow={true}>
        <Title
          text="Equipment"
          style={{ backgroundColor: theme.colors.accent.green }}
        />
      <GridList title="Skin">{[...Array(10)].map((_, i) => i)}</GridList>
      <GridList title="Clothes">{[...Array(15)].map((_, i) => i)}</GridList>
      <GridList title="Head">{[...Array(5)].map((_, i) => i)}</GridList>
      </Card>
    </ScrollPage>
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
