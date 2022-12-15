import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../elements/layout/Header";
import { AvatarQBtn } from "./avatarComponents";

export default function Backpack2() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('MainNavigator');
    }

    return(
        <Page>
            <Header left={'Collect your backpack'} right={0} />
            <View style={styles.contents}>
                <View style={styles.textWrap}>
                    <Text>What are you interesed in?</Text>
                    <Text>Mulitple selection possible</Text>
                </View>
            </View>
            <MainButton title="next step" onPress={onpressNextstep}></MainButton>

        </Page>
    );
}

const styles = StyleSheet.create({
    contents: {
      flex: 1,
      justifyContent: 'center',
    },
    textWrap: {
      alignItems: 'center',
      paddingBottom: 37,
    },
    btnWrap: {
      justifyContent: "space-evenly",
      flexDirection: 'row',
    },
    btn: {
      alignItems: 'center',
    }
  });
