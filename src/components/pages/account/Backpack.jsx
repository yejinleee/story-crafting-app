import { Image, Text, View } from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "../../elements/layout/Card";
import GridList from "../../elements/layout/GridList";
import MainHeader from "../../elements/layout/MainHeader";
import Title from "../../elements/layout/Title";
import Page from "../Page";
import ScrollPage from "../ScrollPage";
import ItemList from "../../elements/layout/ItemList";
import { useAvatarContext } from "../../../hooks/context/AvatarContext";
import useAvatar from "../../../hooks/useAvatar";

export default function Backpack({ navigation }) {
  const { hats, eyewears, faces, bodies } = useAvatar();

  return (
    <ScrollPage
      header={<MainHeader onBackButton={navigation.goBack} title="Backpack" />}
    >
      <Card shadow={true}>
        <Title
          text="Goal"
          style={{ backgroundColor: theme.colors.accent.yellow }}
        ></Title>
        {[
          {
            goal: "Goal 1",
            description: "Have a clear idea about my career goals"
          },
          { goal: "Goal 2", description: "Pass all my subjects" },
          { goal: "Goal 3", description: "Feeling less stressed" }
        ].map(({ goal, description }) => (
          <View>
            <Text style={{ color: theme.colors.accent.blue }}>
              <b>{goal}</b>
            </Text>
            <Text>{description}</Text>
          </View>
        ))}
      </Card>
      <Card shadow={true}>
        <Title
          text="Equipment"
          style={{ backgroundColor: theme.colors.accent.yellow }}
        />
        <ItemList
          title="Hat"
          elements={Object.keys(hats).map((key, i) => (
            <Image
              style={{ height: "100%", width: "100%" }}
              source={hats[key ?? "default"] ?? "default"}
              key={key}
            ></Image>
          ))}
        />
        <ItemList
          title="Eyewear"
          elements={Object.keys(eyewears).map((key, i) => (
            <Image
              style={{ height: "100%", width: "100%" }}
              source={eyewears[key ?? "default"] ?? "default"}
              key={key}
            ></Image>
          ))}
        />
        <ItemList
          title="Face"
          elements={Object.keys(faces).map((key, i) => (
            <Image
              style={{ height: "100%", width: "100%" }}
              source={faces[key ?? "default"] ?? "default"}
              key={key}
            ></Image>
          ))}
        />
        <ItemList
          title="Body"
          elements={Object.keys(bodies).map((key, i) => (
            <Image
              style={{ height: "100%", width: "100%" }}
              source={bodies[key ?? "default"] ?? "default"}
              key={key}
            ></Image>
          ))}
        />
      </Card>
    </ScrollPage>
  );
}
