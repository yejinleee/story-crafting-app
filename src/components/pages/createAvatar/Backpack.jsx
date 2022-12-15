import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TouchableOpacity, Image } from "react-native";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { styleSystem } from "../../../style/styleSystem";

export default function Backpack() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('Backpack2');
    }
    return(
        <Page title="Signup">
          <View style={[styleSystem.center, {flex:1}]}>
            <Text style={styles.text}>Let’s collect some things in the </Text>
            <Text style={styles.text}>backpack of your character.</Text>
            <Text style={styles.text2}>press the button below</Text>
            <View style={[styleSystem.center]}>
                <TouchableOpacity onPress={onpressNextstep} style={styles.circle}>
                    <Image source={require('../../../assets/backpack.png')} style={{width: 167, height: 190, position:'absolute'}} />
                </TouchableOpacity>
            </View>
          </View> 
        </Page>
    );
}

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
  },
  text2: {
    marginTop: 20,
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle:{
    width: 321,
    height: 321,
    borderRadius: '50%',
    backgroundColor: '#C9F0CD',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 49,
  },
});
