import { SafeAreaView, View, Text, Button, TouchableOpacity } from "react-native";
import Account from "./Account";
import Home from "./Home";
import Workshops from "./Workshops";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Posting from "./Posting";

const Tab = createBottomTabNavigator();

const MainNavigator = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" color={color} size={26} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("CreatePost")}>
              <Ionicons name="add-circle-outline" size={26} />
            </TouchableOpacity>
          )
        }}
        name="Home"
        component={Posting}
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
