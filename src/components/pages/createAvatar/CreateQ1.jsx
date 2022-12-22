import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../elements/layout/Header";
import { AvatarQBtn } from "./avatarComponents";
import { useRecoilState } from 'recoil';
import { personalData } from "../../../state/personalData";

export default function CreateQ1() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('CreateQ2');
    }
    const [q1_1, setQ1_1] = useState(false);
    const [q1_2, setQ1_2] = useState(true);
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
            <Header left={'Beginning of the journey'} right={'1'} />
            <View style={styles.contents}>
                <View style={styles.textWrap}>
                    <Text>Your perfect trip is</Text>
                </View>
                <View style={styles.btnWrap}>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'Well-planned'} isSelected={q1_1} iconSrc={'q1_1'} handleOnpress={() => handleOnpress('q1_1', 'q1_2')}/>
                    </View>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'Last minute'} isSelected={q1_2} iconSrc={'q1_2'} handleOnpress={() => handleOnpress('q1_2', 'q1_1')}/>
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
