import React, { useState } from "react";
import { StyleSheet, Button,TouchableOpacity, Text, View, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import MainButton from "../elements/button/NextStepButton";
import Page from "./Page";
import { GobackHeader } from "../elements/layout/GobackHeader";

export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [username, setUsername] = useState('');

    const onpressNextstep = () => {
      navigation.reset({routes: [{name: 'AvatarNavigator'}]})
        console.log('pressed next step in Signup');
    }
    const goBack = () => {
      navigation.goBack();
    }
    return(
        <Page title="Signup">
            <GobackHeader goBack={goBack} title="" />
            {/* <TouchableOpacity onPress={goBack}> */}
              {/* <Text>asdfsafads</Text> */}
            {/* </TouchableOpacity> */}
            <View style={[styles.container, {flex:1}]}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                    <Text style={[styles.signupText, {marginTop: 70}]}>Type your university account</Text>
                    <TextInput style={[styles.input, {marginTop: 9}]} onChangeText={setEmail} value={email} placeholder={'Email'}/>
                    <TextInput style={[styles.input, {marginTop: 14}]} onChangeText={setPw} value={pw} placeholder={'Password'} />
                    <Text style={[styles.signupText, {marginTop: 37}]}>Type your username</Text>
                    <TextInput style={[styles.input, {marginTop: 9}]} onChangeText={setUsername} value={username} placeholder={'Username'}/>
                </KeyboardAvoidingView>
            </View>
            <MainButton title="next step" onPress={onpressNextstep}></MainButton>

        </Page>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  signupText: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  input: {
    width: 277,
    height: 64,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
  },
});
