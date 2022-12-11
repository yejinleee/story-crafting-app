import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { styleSystem } from "../../../style/styleSystem";

export default function Create1character() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('Create2backpack');
    }
    return(
        <Page title="Signup">
            <View style={[styleSystem.center, {flex:1}]}>
                <View style={[styles.circle, styleSystem.center]}>
                </View>
                <Text style={styles.text}>Create your own character!</Text>
            </View> 
            <MainButton title="next step" onPress={onpressNextstep}></MainButton>

        </Page>
    );
}

const styles = StyleSheet.create({
  circle:{
    width: '141px',
    height: '141px',
    borderRadius: '50%',
    backgroundColor: '#D9D9D9',
  },
  text:{
    top: '-77.5px',//half of radius of circle+ half of font size
    position: 'relative',
  }
});
