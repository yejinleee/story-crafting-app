import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { theme } from "../../style/theme.style";
import Card from "../elements/layout/Card";
import Post from "../elements/posting/Post";
import Page from "./Page";
import ScrollPage from "./ScrollPage";

const Stack = createNativeStackNavigator();

export default function Posting() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        screenOptions: {
          backgroundColor: "white",
          screenStyle: { backgroundColor: "blue" }
        }
      }}
    >
      <Stack.Screen
        name="Posting"
        component={() => (
          <ScrollPage>
            <Card round={true}>
              <Text
                style={{fontSize: theme.fontSize.s}}
              >
                You uploaded 1 post for a week. Share your stories with others!
              </Text>
            </Card>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Post key={index} />
              ))}
          </ScrollPage>
        )}
      />
      <Stack.Screen
        name="CreatePost"
        component={() => <Page>Create post</Page>}
      />
    </Stack.Navigator>
  );
}
