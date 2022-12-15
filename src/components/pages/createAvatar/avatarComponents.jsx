import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

export const AvatarQBtn = ({iconSrc, serialN, text, isSelected, handleOnpress}) => {
    return (
        <>
            <TouchableOpacity style={ isSelected ? [styles.circleBtn, styles.circleBtnSelected] : [styles.circleBtn, styles.circleBtnUnelected]}>
                <Text>이미지 iconSrc</Text>
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