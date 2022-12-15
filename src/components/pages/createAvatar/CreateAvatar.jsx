import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { styleSystem } from "../../../style/styleSystem";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CreateAvatar() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('CreateQ1');
    }
    return(
        <Page title="Signup">
          <View style={[styleSystem.center, {flex:1}]}>
            <Text style={styles.text}>Let's begin the journey!</Text>
            <View style={[styleSystem.center]}>
            <View style={[styles.circle1, styleSystem.center]}></View>
            <View style={[styles.circle2, styleSystem.center]}></View>
            <View style={[styles.circle3, styleSystem.center]}>
              <Icon name="arrow-forward-ios" size={21} color="#FFFFFF" />
            </View>
            </View>
          </View> 
          <MainButton title="next step" onPress={onpressNextstep}></MainButton>
        </Page>
    );
}

const styles = StyleSheet.create({
  text:{
    paddingBottom: 47,
  },
  circle1:{
    width: 215,
    height: 215,
    borderRadius: '50%',
    backgroundColor: 'none',
    borderWidth: 3,
    borderColor: '#FF8E8E',
  },
  circle2:{
    position: 'absolute',
    width: 141,
    height: 141,
    borderRadius: '50%',
    backgroundColor: '#FFF7A1',
  },
  circle3:{
    position: 'absolute',
    width: 68,
    height: 68,
    borderRadius: '50%',
    backgroundColor: '#AACBFC',
  },
});
