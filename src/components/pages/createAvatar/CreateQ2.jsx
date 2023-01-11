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

export default function CreateQ2() {
    const navigation = useNavigation();
    const onpressGoback = () => {
        navigation.navigate('CreateQ1');
    }
    const [q2_1, setQ2_1] = useState(false);
    const [q2_2, setQ2_2] = useState(false);
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
            <Header left={'Beginning of the journey'} right={'2'} />
            <View style={styles.contents}>
                <View style={styles.textWrap}>
                    <Text>Your perfect night look like</Text>
                </View>
                <View style={styles.btnWrap}>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'Party with friends'} isSelected={q2_1} iconSrc={'q2_1'} handleOnpress={() => handleOnpress('q2_1', 'q2_2')}/>
                    </View>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'Movie night and popcorn'} isSelected={q2_2} iconSrc={'q2_2'} handleOnpress={() => handleOnpress('q2_2', 'q2_1')}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={onpressGoback} style={{alignItems:'center'}}>
              <Text style={{color:'#8B8A8A', textDecorationLine: 'underline'}}>
                Go back
              </Text>
            </TouchableOpacity>

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