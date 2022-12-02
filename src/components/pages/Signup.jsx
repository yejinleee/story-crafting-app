import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity } from "react-native";
import { theme } from "../../style/theme.style";

const Signup =() => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const onpressClick = () => {
        console.log('login');
    }
    const onpressSignup = () => {
        console.log('signup');
    }
    return (
        <SafeAreaView style={styles.flex}>
            <StatusBar barStyle={'dark-content'} backgroundColor="white" />
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} />
                <Text>sign up</Text>
            </View>
        </SafeAreaView>
    );
}
export default Signup;

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
        width: '80%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
