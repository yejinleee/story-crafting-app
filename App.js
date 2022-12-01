import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import Activity from "./src/components/elements/workshop/Activity";
import Account from "./src/components/pages/Account";
import Home from "./src/components/pages/Home";
import Workshops from "./src/components/pages/Workshops";
import { theme } from "./src/style/theme.style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const navigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: "0"
    }
  };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Profile"
          component={Account}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Workshops"
          component={Workshops}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{ ...navigationOptions, activityId: 0 }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) =>
              <Ionicons name="add-circle-outline" color={color} size={26} />
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) =>
              <Ionicons name="flag-outline" color={color} size={26} />
          }}
          name="Workshops"
          component={Workshops}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) =>
              <Ionicons name="chatbubble-ellipses-outline" color={color} size={26} />
          }}
          name="Chat"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) =>
              <Ionicons name="person-outline" color={color} size={26} />
          }}
          name="Profile"
          component={Account}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
