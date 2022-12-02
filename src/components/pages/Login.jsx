import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity } from "react-native";
import { theme } from "../../style/theme.style";
import {useNavigation} from '@react-navigation/native';

const Login =() => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const onpressClick = () => {
        console.log('login');
    }
    const navigation = useNavigation();
    const onpressSignup = () => {
        navigation.navigate('Signup');
    }
    return (
        <SafeAreaView style={styles.flex}>
            <StatusBar barStyle={'dark-content'} backgroundColor="white" />
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                    <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder={'Email'}/>
                    <TextInput style={styles.input} onChangeText={setPw} value={pw} placeholder={'Password'} />
                    <TouchableOpacity onPress={onpressClick}>
                    <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onpressSignup}>
                        <Text>sign up</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}
export default Login;

const styles = StyleSheet.create({
    flex: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    container: {
        height: "100%",
        width: "100%",
        padding: theme.spacing.m,
        backgroundColor: theme.colors.background,
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
