import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../elements/layout/Header";
import { AvatarQBtn } from "./avatarComponents";
import { useRecoilState } from 'recoil';
import { personalData } from "../../../state/personalData";

export default function CreateQ3() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('CreateYouravatar');
    }
    const [q3_1, setQ3_1] = useState(false);
    const [q3_2, setQ3_2] = useState(false);
    const [createAvatar, setCreateAvatar] = useRecoilState(personalData);

    // ..... !------------
    const handleOnpress = (selected, opposite) => {
        if (createAvatar.includes(selected)) {
          const newAvatar = createAvatar.filter((i) => i !==selected);
          setCreateAvatar(newAvatar);
        } else{
          setCreateAvatar((prev) => [...prev, selected])
        }
        if (createAvatar.includes(opposite)) {
          const newAvatar = createAvatar.filter((i) => i !==opposite);
          setCreateAvatar(newAvatar);
        }
      }
    return(
        <Page>
            <Header left={'Beginning of the journey'} right={'3'} />
            <View style={styles.contents}>
                <View style={styles.textWrap}>
                    <Text>You enjoy working</Text>
                </View>
                <View style={styles.btnWrap}>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'Alone'} isSelected={q3_1} iconSrc={'q3_1'} handleOnpress={() => handleOnpress('q3_1', 'q3_2')}/>
                    </View>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'In a team'} isSelected={q3_2} iconSrc={'q3_2'} handleOnpress={() => handleOnpress('q3_1', 'q3_2')}/>
                    </View>
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
