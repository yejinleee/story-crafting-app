import { SafeAreaView, View, Text, Image } from "react-native";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Workshops from "../pages/Workshops";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Ionicons from "@expo/vector-icons/Ionicons";
import Posting from "../pages/Posting";
import Chat from "../pages/Chat";

const ICON_SIZE = 32;
const ICON_STYLE = { width: ICON_SIZE, height: ICON_SIZE };

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 75,
          paddingBottom: 10,
          borderTopColor: "transparent",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowOpacity: 0.27,
          shadowRadius: 10,
          elevation: 6
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Posting}
        options={{
          header: () => {},
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_home_selected.png")}
                  style={ICON_STYLE}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_home.png")}
                  style={ICON_STYLE}
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
          tabBarLabel: "Workshop",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_workshops_selected.png")}
                  style={ICON_STYLE}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_workshops.png")}
                  style={ICON_STYLE}
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
          tabBarLabel: "Chatting",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_chat_selected.png")}
                  style={ICON_STYLE}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_chat.png")}
                  style={ICON_STYLE}
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
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_profile_selected.png")}
                  style={ICON_STYLE}
                />
              );
            } else {
              return (
                <Image
                  source={require("../../assets/tab_bar_icons/icon_profile.png")}
                  style={ICON_STYLE}
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
