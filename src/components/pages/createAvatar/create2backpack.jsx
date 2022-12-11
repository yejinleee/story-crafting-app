import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';

export default function Create2backpack() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('Create3interest');
    }
    return(
        <Page title="Signup">
            <Text>Let's begin the journey</Text>
            <Divider/>
            <View style={{flex:1}}>
                <Text>Let’s collect some things in the backpack of your character.</Text>

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
