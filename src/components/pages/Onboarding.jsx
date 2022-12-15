import { StyleSheet, StatusBar, SafeAreaView, View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Onboarding = () => {
    return(
        <SafeAreaView style={[styles.flex, {backgroundColor: 'white'}]}>
            <StatusBar barStyle={'dark-content'} backgroundColor="white" />
            <View style={styles.container}>
                <Image source={require('../../assets/logo_storycrafting.png')} style={{width: 250, height: 250, borderRadius: 15}} />
                <Text>Storycrafting app</Text>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding;

const styles = StyleSheet.create({
    flex: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
      width: "80%"
    },
  });