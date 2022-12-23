import { SafeAreaView, View, Text, Image } from "react-native";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Workshops from "../pages/Workshops";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Ionicons from "@expo/vector-icons/Ionicons";
import Posting from "../pages/Posting";
import Chat from '../pages/Chat';

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Posting}
        options={{
          header: () => { },
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_home_selected.png")}
                  style={{ width: 26, height: 26 }}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_home.png")}
                  style={{ width: 26, height: 26 }}
                />
              );
            }
          }
        }}
      />
      <Tab.Screen
        name="Workshop"
        component={Workshops}
        options={{
          header: () => {},
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_workshops_selected.png")}
                  style={{ width: 26, height: 26 }}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_workshops.png")}
                  style={{ width: 26, height: 26 }}
                />
              );
            }
          }
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          header: () => {},
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_chat_selected.png")}
                  style={{ width: 26, height: 26 }}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_chat.png")}
                  style={{ width: 26, height: 26}}
                />
              );
            }
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Account}
        options={{
          header: () => {},
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_profile_selected.png")}
                  style={{ width: 26, height: 26 }}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_profile.png")}
                  style={{ width: 26, height: 26 }}
                />
              );
            }
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
