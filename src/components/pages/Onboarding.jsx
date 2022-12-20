import { StyleSheet, StatusBar, SafeAreaView, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Onboarding = () => {
    return(
        <SafeAreaView style={styles.flex}>
            <StatusBar barStyle={'dark-content'} backgroundColor="white" />
            <View style={styles.container}>
                <Icon name="medal" size={100} />
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