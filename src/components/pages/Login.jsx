import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity } from "react-native";
import { theme, palette } from "../../style/theme.style";
import {useNavigation} from '@react-navigation/native';

const Login =() => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const onpressLogin = () => {
        navigation.navigate('MainNavigator');
        console.log('login');
    }
    const navigation = useNavigation();
    const onpressSignup = () => {
        navigation.navigate('Signup');
    }
    return (
        <SafeAreaView style={[styles.flex]}>
            <StatusBar barStyle={'dark-content'} backgroundColor="#D9D9D9" /> 
            {/* for AOS */}
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                    <View style={{alignItems: 'center'}}>
                        <TextInput style={[styles.input, {marginTop: 107}]} onChangeText={setEmail} value={email} placeholder={'Email'}/>
                        <TextInput style={[styles.input, {marginTop: 30}]} onChangeText={setPw} value={pw} placeholder={'Password'} />
                    </View>
                    <TouchableOpacity style={styles.forgot}>
                        <Text>Forgot your password?</Text>                        
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onpressLogin} style={styles.loginBtn}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onpressSignup} style={styles.signupBtn}>
                        <Text style={{textDecorationLine: 'underline'}}>sign up</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}
export default Login;

const styles = StyleSheet.create({
    flex: {flex: 1, backgroundColor: '#FFFFFF'},
    container: {
        padding: theme.spacing.m,
        backgroundColor: theme.colors.background,
        flex: 2,
        alignItems: 'center',
    },
    input: {
        width: 277,
        height: 64,
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 20,
      },
      forgot: {
        alignItems: 'flex-end',
        marginTop: 8,
      },
      loginBtn: {
        backgroundColor: palette.blue,
        width: 300,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 33,
      },
      signupBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
});
