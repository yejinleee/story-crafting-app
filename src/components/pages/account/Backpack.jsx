import { Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "../../elements/layout/Card";
import GridList from "../../elements/layout/GridList";
import Title from "../../elements/layout/Title";
import Page from "../Page";
import ScrollPage from "../ScrollPage";

export default function Backpack() {
  return (
    <ScrollPage>
      <Card shadow={true}>
        <Title
          text="Goal"
          style={{ backgroundColor: theme.colors.accent.yellow }}
        ></Title>
        {[
          { goal: "Goal 1", description: "Something about goal" },
          { goal: "Goal 2", description: "Something about goal" },
          { goal: "Goal 3", description: "Something about goal" }
        ].map(({ goal, description }) => (
          <View>
            <Text>{goal}</Text>
            <Text>{description}</Text>
          </View>
        ))}
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
