import React, { useState } from "react";
import { Modal, Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import { palette, theme } from "../../style/theme.style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Card from "../elements/layout/Card";
import ScrollPage from "./ScrollPage";
import ChatHeader from "../elements/layout/ChatHeader";
import { ChatDetails, GroupchatDetails } from "./ChatDetails";
import { dummy, groupDummy } from "./ChatDummy";
import ChatList from "../elements/layout/ChatList";
const Stack = createNativeStackNavigator();

export default function Chat({ navigation }) {
  const onpressJoin = () => {
    setShowGroup(true);
    setNewchatModalOpen(false);
  }
  const [showGroup, setShowGroup] = useState(false); //발표용 ..
  const [newchatModalOpen, setNewchatModalOpen] = useState(false);
  const NewChatModal = () => {
    const keywords=['Career', 'Motivation','Workshops','Self-development','Relationship','Future','Language','Work experience','Loneliness']
    return (
      <Modal visible={newchatModalOpen} animationType="fade" transparent={true}>
        <TouchableOpacity style={[styles.overlay]} activeOpacity={1} onPress={() => setNewchatModalOpen(false)}>
            <TouchableWithoutFeedback>
            <SafeAreaView style={{alignItems:'center'}}>
              <View style={styles.modalWrap}>
                <View style={styles.chatMSearch}>
                  <Text style={{fontWeight: "bold"}}>Chat with someone new</Text>
                  <View style={styles.search}>

                  </View>
                </View>
                <View style={styles.chatMDivide}>
                  <View style={styles.divideLine} />
                  <Text> or </Text>
                  <View style={styles.divideLine} />
                </View>
                <View style={styles.chatMSelect}>
                  <Text style={{fontWeight: "bold"}}>Join a new group</Text>
                  <Text>Select the keywords that you identify your concerns with</Text>
                  <View style={styles.selects}>
                  <ChatList
                      elements={keywords.map((key, i) => (
                        <Text>{key}</Text>
                      ))}
                    />
                  </View>
                </View>
                <View style={styles.chatMBtn}>
                  <TouchableOpacity style={styles.btnBlue} onPress={onpressJoin}>
                    <Text style={{fontWeight: "bold"}}>Join Group</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    )
  }
  const newChat = () => {
    setNewchatModalOpen(!newchatModalOpen);
  }
  const ChatMain = () => (
    <ScrollPage header={<ChatHeader title="Chatting" onAction={newChat}/>}>
      {dummy.map((v, i) => 
        <Card shadow={true} style={styles.avatarSpace} key={i}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatDetails', {chatId: i})}>
            <View style={styles.eachChatWrap}>
              <View style={styles.avatarWrap}>
                <Image
                      source={require(`../../assets/chat/chatP${i+1}.png`)}
                      style={{ width: 32, height: 34 }}
                    />
              </View>
              <View style={styles.chatRight}>
                <Text style={{fontWeight: 'bold'}}>{v.name}</Text>
                <View style={styles.chatBox}>
                  <Text style={{marginLeft: 10}}>{v.chat[v.chat.length -1][v.chat[v.chat.length-1].length-1]}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Card>)
      }
      {showGroup && 
        <Card shadow={true} style={styles.avatarSpace}>
          <TouchableOpacity onPress={() => navigation.navigate('GroupchatDetails')}>
            <View style={styles.eachChatWrap}>
              <View style={styles.avatarWrap}>
                <Image
                      source={require(`../../assets/chat/chatG1.png`)}
                      style={{ width: 32, height: 34 }}
                    />
              </View>
              <View style={styles.chatRight}>
                <Text style={{fontWeight: 'bold'}}>Yaejin, Baris ...+4</Text>
                <View style={styles.chatBox}>
                  <Text style={{marginLeft: 10}}>Nice to meet you!</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      }
      <NewChatModal visible={newchatModalOpen} />
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
      <Stack.Screen name="GroupchatDetails" component={GroupchatDetails} />
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
  chatRight:{
    justifyContent: 'space-between',
  },
  chatBox:{
    borderColor: 'rgba(0,0,0, 0.1)',
    borderRadius:15,
    borderWidth: 1,
    width: 270,
    height: 25,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalWrap:{
    width: '88%',
    height: 424, //
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 14,
  },
  chatMSearch:{
    width: '100%',
  },
  search:{
    borderRadius:30,
    borderWidth:1,
    height: 36,
    borderColor: palette.blue,
    marginTop: 6,
    marginBottom: 22,
  },
  chatMDivide:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divideLine:{
    height:1,
    backgroundColor:'#D9D9D9',
    width: '35%',
  },
  chatMSelect:{
    marginTop:19,
  },
  selects:{
    marginVertical: 16,
  },
  chatMBtn:{
    alignItems: 'center',
  },
  btnBlue:{
    width: 127,
    height: 27,
    backgroundColor: palette.blue,
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
});


