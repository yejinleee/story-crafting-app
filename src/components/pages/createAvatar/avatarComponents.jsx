import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform, Image } from 'react-native';
import {useRecoilState} from 'recoil';
import { personalData } from '../../../state/personalData';
export const AvatarQBtn = ({iconSrc, serialN, text, isSelected, handleOnpress}) => {
    const [createAvatar, setCreateAvatar] = useRecoilState(personalData);
    return (
        <>
            <TouchableOpacity onPress={handleOnpress}
                className= {iconSrc}
                style={ createAvatar.includes(iconSrc) ? [styles.circleBtn, styles.circleBtnSelected] : [styles.circleBtn, styles.circleBtnUnelected]}
            >
                <Image
                  source={require(`../../../assets/onboarding/${iconSrc}.png`)}
                  style={iconSrc.includes('q2_1') ? {width: 85, height: 46}
                  : iconSrc.includes('q2_2') ?{width: 76, height: 38}
                  : iconSrc.includes('q3_1') ? {width: 74, height: 62} :{ width: 45, height: 45 }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>
                {text}
            </Text>
        </>
    )
}

const styles= StyleSheet.create({
    circleBtn: {
        width: 125,
        height: 125,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleBtnSelected:{
        backgroundColor: '#C9F0CD',
        ...Platform.select({
            ios: {
                shadowColor: 'rgb(50,50,50)',
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0,
                },
            },
            android: {
                elevation: 3,
            },
        })
    },
    circleBtnUnelected:{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
    },
    text: {
        width: 116,
        marginTop: 19,
        textAlign: 'center'
    }
})