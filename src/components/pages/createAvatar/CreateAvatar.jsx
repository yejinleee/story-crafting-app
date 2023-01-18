import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { styleSystem } from "../../../style/styleSystem";
import { palette } from "../../../style/theme.style";
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
            <TouchableOpacity style={[styles.circle3, styleSystem.center]} onPress={onpressNextstep}>
              <Icon name="arrow-forward-ios" size={21} color="#FFFFFF" />
            </TouchableOpacity>
            </View>
          </View> 
        </Page>
    );
}

const styles = StyleSheet.create({
  text:{
    paddingBottom: 47,
  },
  circle1:{
    width: 205,
    height: 205,
    borderRadius: 50,
    backgroundColor: 'none',
    borderWidth: 3,
    borderColor: palette.blue,
  },
  circle2:{
    position: 'absolute',
    width: 125,
    height: 125,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(170,203,252,0.3)',
  },
  circle3:{
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: palette.blue,
  },
});
