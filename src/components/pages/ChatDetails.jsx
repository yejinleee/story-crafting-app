import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Button, ScrollView} from "react-native";
import { theme } from "../../style/theme.style";
import ScrollPage from "./ScrollPage";
import Page from "./Page";
import ChatHeader from "../elements/layout/ChatHeader";
import { dummy } from "./ChatDummy";
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
                                            <Text>{v}2</Text>
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