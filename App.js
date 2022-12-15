import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { theme } from "./src/style/theme.style";
import { useState } from "react";
import Onboarding from './src/components/pages/Onboarding';
import { AuthNavigator } from "./src/components/nav/AuthNavigator";
import MainNavigator from "./src/components/nav/MainNavigator";
import { AvatarNavigator } from "./src/components/nav/AvatarNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: "0"
    }
  };
  const [loading, setLoading] = useState(true); //for splash screen
  const [isLogin, setIsLogin] = useState(false);
  const [madeAvatar, setMadeavatar] = useState(false);

  //온보딩용. 페이지 넘어가려면 주석 해제
  useEffect(() => {
    const onboarding = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(onboarding);
  }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
          {loading ? (
            <Stack.Screen name="Onboarding" component={Onboarding} />
          ) : isLogin ? (
            <Stack.Screen name="MainNavigator" component={MainNavigator} />
          ) : (
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> 
          )
          // ) : madeAvatar ? (
          //   <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          // ) : (
          //   <Stack.Screen name="AvatarNavigator" component={AvatarNavigator} />
          // )}
          }
        </Stack.Navigator>      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
