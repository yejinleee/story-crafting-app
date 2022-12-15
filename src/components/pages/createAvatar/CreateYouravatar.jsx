import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';

export default function CreateYouravatar() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        console.log('먀');
    }
    return(
        <Page>
            <Text>Your avatar</Text>
            <Divider/>
            <View style={{flex:1}}>
                <Text>Congratulations. This is your avatar</Text>

            </View>
            <MainButton title="next step" onPress={onpressNextstep}></MainButton>

        </Page>
    );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    padding: 4
  },
});
