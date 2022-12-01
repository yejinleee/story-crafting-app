import { SafeAreaView, View, Text } from "react-native";
import Account from "./Account";
import Home from "./Home";
import Workshops from "./Workshops";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" color={color} size={26} />
          )
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="flag-outline" color={color} size={26} />
          )
        }}
        name="Workshops"
        component={Workshops}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={color}
              size={26}
            />
          )
        }}
        name="Chat"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={26} />
          )
        }}
        name="Profile"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
