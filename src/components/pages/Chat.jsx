import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { theme } from "../../style/theme.style";
import MainButton from "../elements/button/NextStepButton";
import Divider from "../elements/layout/Divider";
import Page from "./Page";
import Ionicons from "@expo/vector-icons/Ionicons";
import Calendar from "../elements/profile/Calendar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import { TouchableOpacity } from "react-native-web";
import Backpack from "./account/Backpack";
import Avatar from "./account/Avatar";
import Rewards from "./account/Rewards";
import Card from "../elements/layout/Card";
import Title from "../elements/layout/Title";
import ScrollPage from "./ScrollPage";
import ChatHeader from "../elements/layout/ChatHeader";
import { ChatDetails } from "./ChatDetails";
import { dummy } from "./ChatDummy";

const Stack = createNativeStackNavigator();

export default function Chat({ navigation }) {
  const newChat = () => {
    console.log('새채팅');
  }
  const Selector = ({ icon, name, onClick }) => {
    const { red, blue, green } = theme.colors.accent;
    const titleColors = { Avatar: red, Backpack: green, Rewards: blue };
    const titleColor = titleColors[name] ?? red;

    return (
      <TouchableOpacity
        onPress={onClick}
        style={{
          ...theme.style.card,
          ...styles.selector,
          borderColor: titleColor,
          borderWidth: 2,
          paddingVertical: theme.spacing.xs,
          paddingHorizontal: theme.spacing.xs
        }}
      >
        <Title text={name} style={{ backgroundColor: titleColor }}></Title>
        <View style={styles.iconSpace}>
          <Ionicons name={icon} color={titleColor} size={48} />
        </View>
      </TouchableOpacity>
    );
  };
  const ChatMain = () => (
    <ScrollPage header={<ChatHeader title="Chatting" onAction={newChat}/>}>
      {dummy.map((v, i) => 
        <Card shadow={true} style={styles.avatarSpace}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatDetails', {chatId: 1})}>
            <View style={styles.eachChatWrap}>
              <View style={styles.avatarWrap}>
                <Image
                      source={require("../../assets/tab_bar_icons/icon_home_selected.png")}
                      style={{ width: 32, height: 34 }}
                    />
              </View>
              <View style={styles.chatRight}>
                <Text style={{fontWeight: 'bold'}}>{v.name}</Text>
                <View style={styles.chatBox}>
                  <Text>{v.chat[v.chat.length -1][v.chat[v.chat.length-1].length-1]}</Text>
                </View>
              </View>
            </View>
            

          </TouchableOpacity>
      </Card>)}

    </ScrollPage>
  );

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
      <Stack.Screen name="ChatMain" component={ChatMain} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  avatarSpace: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 80,
    gap: theme.spacing.l,
    alignItems: "center"
  },
  avatarSelector: {
    flex: 1,
    display: "flex",
    height: "100%"
  },
  title: {
    borderRadius: theme.radius.l,
    paddingVertical: theme.spacing.s,
    marginHorizontal: theme.spacing.m,
    marginTop: theme.spacing.m,
    textAlign: "center",
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.primary
  },
  iconSpace: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  selector: {
    flex: 1,
    display: "flex",
    padding: 0
  },
  selectors: {
    gap: theme.spacing.l,
    minWidth: "30%",
    display: "flex",
    height: "100%",
    flexDirection: "column"
  },
  avatarWrap: {
    width: 50,
    height: 50,
    borderRadius:20,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  eachChatWrap:{
    display: 'flex',
    flexDirection: 'row',
  },
  chatBox:{
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderRadius:15,
    width: 270,
    height: 30,
    justifyContent: "center",
  },

});


