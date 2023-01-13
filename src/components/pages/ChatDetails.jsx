import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView} from "react-native";
import { theme } from "../../style/theme.style";
import Page from "./Page";
import ChatHeader from "../elements/layout/ChatHeader";
import { dummy,groupDummy } from "./ChatDummy";
export const ChatDetails = ({navigation, route, chatId}) => {
    const chat = dummy[route.params.chatId].chat
    return (
        <>
            <Page>
                <ChatHeader onBackButton={navigation.goBack} title={dummy[route.params.chatId].name}/>
                <ScrollView
                    style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    paddingVertical: theme.spacing.m
                    }}
                >
                    <View style={styles.container}>
                        {chat.map((v,i) =>
                            <View key={i} style={i%2!=0 && {alignItems: 'flex-end'}}>
                                { i%2==0 ? (
                                    v.map((v,i) => 
                                        <View style={styles.you} key={i}>
                                            <Text>{v}</Text>
                                        </View>
                                    )
                                ) : (
                                    v.map((v,i) => 
                                        <View style={styles.me} key={i}>
                                            <Text >{v}</Text>
                                        </View>
                                    )
                                )}
                            </View>
                        )}
                    </View>
                </ScrollView>
            </Page>
        </>        
    )
}

export const GroupchatDetails = ({navigation, route, chatId}) => {
    const chat = groupDummy
    console.log(chat)
    return (
        <>
            <Page>
                <ChatHeader onBackButton={navigation.goBack} title="Yaejin, Baris ...+4"/>
                <Text style={{textAlign: 'center', marginVertical: 20,}}>Welcome Now you are part of workshop.</Text>
                <ScrollView
                    style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    paddingVertical: theme.spacing.m
                    }}
                >
                    <View style={styles.container}>
                        <Text style={{fontWeight: 'bold'}}>{chat[0].name}</Text>
                        <View >
                            <View style={styles.you}>
                                <Text>{chat[0].chat}</Text>
                            </View>
                        </View>
                        <Text style={{fontWeight: 'bold'}}>{chat[1].name}</Text>
                        <View >
                            <View style={styles.you}>
                                <Text>{chat[1].chat}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Page>
        </>        
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: theme.spacing.m,
        // backgroundColor: theme.colors.background,
        flex: 1,
        display: "inline-flex",
        flexDirection: "column",
        gap: 15,
    },
    you: {
        justifyContent: 'center',
        width: 'fit-content',
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 5,
        backgroundColor: 'rgba(201,240,205,0.2)',
        height: 35,
        borderRadius: 15,
        borderColor: '#C9F0CD',
        borderWidth: 1,
        textAlign: 'center',
    },
    me:{
        justifyContent: 'center',
        width: 'fit-content',
        marginBottom: 5,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: 'rgba(170,203,252,0.2)',
        height: 35,
        borderRadius: 15,
        borderColor: '#C9F0CD',
        borderWidth: 1,
        textAlign: 'center',
    }
})