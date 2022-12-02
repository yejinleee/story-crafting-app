import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import MainButton from "../elements/button/MainButton";
import Divider from "../elements/layout/Divider";
import Page from "./Page";

export default function Signup({ navigation }) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [checkpw, setCheckpw] = useState(''); 

    const onpressNextstep = () => {
        navigation.navigate('Create1character');
        console.log('pressed next step in Signup');
    }
    return(
        <Page title="Signup">
            <Text>Let's begin the journey</Text>
            <Divider/>
            <View style={{flex:1}}>
                <Text>create an account</Text>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                    <TextInput style={styles.input} onChangeText={setName} value={name} placeholder={'Name'}/>
                    <TextInput style={styles.input} onChangeText={setLastname} value={lastname} placeholder={'Last Name'}/>
                    <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder={'Username'}/>
                    <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder={'Email'}/>
                    <TextInput style={styles.input} onChangeText={setPw} value={pw} placeholder={'Password'} />
                    <TextInput style={styles.input} onChangeText={setCheckpw} value={checkpw} placeholder={'Repeat password'} />
                </KeyboardAvoidingView>
            </View>
            <MainButton title="next step" onPress={onpressNextstep}></MainButton>

        </Page>
    );
}

const styles = StyleSheet.create({
  workshopGrid: {
    width: "100%"
  },
  item: {
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    padding: 4
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
