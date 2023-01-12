import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, KeyboardAvoidingView, Platform, Image } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../elements/layout/Header";

import FullAvatar from "../../elements/avatar/FullAvatar";
import { useAvatarContext } from "../../../hooks/context/AvatarContext";
import useAvatar from "../../../hooks/useAvatar";

export default function CreateYouravatar() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
      navigation.navigate('Backpack');
    }
    const { hats, eyewears, faces, bodies } = useAvatar();
    const { hat, eyewear, face, body, setHat, setEyewear, setFace, setBody } = useAvatarContext();
    return(
        <Page>
            <Header left={'Your avatar'} right={'4'} />
            <View style={styles.contents}>
                <View style={styles.textWrap}>
                    <Text>Congratulations, this is your avatar</Text>
                </View>
                <FullAvatar {...{ hat, eyewear, face, body }} />
                {/* <Image source={require('../../../assets/sprinkleAvatar.png')} style={{width: 343, height: 450 }} /> */}
            </View>
            <MainButton title="next step" onPress={onpressNextstep}></MainButton>

        </Page>
    );
}

const styles = StyleSheet.create({
    contents: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
