import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { theme } from "../../style/theme.style";
import Post from "../elements/posting/Post";
import Page from "./Page";

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
        component={() =>
          <Page>
            <Text
              style={[theme.style.card, { paddingVertical: theme.spacing.s, marginBottom: theme.spacing.m}]}
            >
              You uploaded 1 post for a week. Share your stories with others!
            </Text>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Post key={index} />
              ))}
          </Page>
        }
      />
      <Stack.Screen name="CreatePost" component={() => <Page>Create post</Page>} />
    </Stack.Navigator>
  );
}
