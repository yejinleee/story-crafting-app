import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform, Image } from 'react-native';
import {useRecoilState} from 'recoil';
import { personalData,personalDataInterst } from '../../../state/personalData';
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
                  style={{width: 60, height: 60}}
                />
            </TouchableOpacity>
            <Text style={styles.text}>
                {text}
            </Text>
        </>
    )
}


// Collect your backpack PAGE
export const InterestBtn = ({serialN, text, isSelected, handleOnpress}) => {
    const [interst, setinterst] = useRecoilState(personalDataInterst);
    return (
        <>
            <TouchableOpacity onPress={handleOnpress}
                className= {serialN}
                style={ interst.includes(String(serialN)) ? [styles.circle2, styles.circleBtn2Selected] : [styles.circle2, styles.circleBtn2Unelected]}
            >
            </TouchableOpacity>
            <Text style={{marginTop: 4, marginBottom: 25}}>
                {text}
            </Text>
        </>
    )
}
const getRandom = () => {
    return parseInt(Math.random() * 3)
}
const color = ['#AACBFC','#C9F0CD','#FF8E8E']
// --------?-------------------

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
    },
    circle2: {
        width: 65,
        height: 65,
        borderRadius: '50%',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    circleBtn2Selected:{
        backgroundColor: color[getRandom()], 
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
})