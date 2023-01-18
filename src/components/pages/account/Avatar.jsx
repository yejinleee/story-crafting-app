import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { theme } from "../../../style/theme.style";
import Card from "../../elements/layout/Card";
import Divider from "../../elements/layout/Divider";
import GridList from "../../elements/layout/GridList";
import MainHeader from "../../elements/layout/MainHeader";
import Title from "../../elements/layout/Title";
import Page from "../Page";
import ScrollPage from "../ScrollPage";
import AvatarDisplay from "../../elements/avatar/Avatar";
import useAvatar from "../../../hooks/useAvatar";
import ItemList from "../../elements/layout/ItemList";
import { useAvatarContext } from "../../../hooks/context/AvatarContext";
import FullAvatar from "../../elements/avatar/FullAvatar";

export default function Avatar({ navigation }) {
  const { hats, eyewears, faces, bodies } = useAvatar();
  const { hat, eyewear, face, body, setHat, setEyewear, setFace, setBody } =
    useAvatarContext();

  return (
    <ScrollPage
      header={<MainHeader onBackButton={navigation.goBack} title="Avatar" />}
    >
      <Card shadow={true}>
        <Title
          text="Avatar"
          style={{ backgroundColor: theme.colors.accent.blue }}
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
          {/* <AvatarDisplay {...{ hat, eyewear, face }} style={{borderColor: "transparent", height: 128, width: 128}}/> */}
          <FullAvatar {...{ hat, eyewear, face, body }}></FullAvatar>
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
          <Text>something about student</Text>
          <Text>Hobby   I like to play football</Text>
          <Text>Hobby   I like to read books</Text>
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
          style={{ backgroundColor: theme.colors.accent.red }}
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
          onSelect={(i, el) => setHat(el)}
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
          onSelect={(i, el) => setEyewear(el)}
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
          onSelect={(i, el) => setFace(el)}
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
          onSelect={(i, el) => setBody(el)}
        />
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
