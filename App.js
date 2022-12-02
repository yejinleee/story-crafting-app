import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Activity from "./src/components/elements/workshop/Activity";
import { theme } from "./src/style/theme.style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import MainNavigator from './src/components/pages/MainNavigator';
import Onboarding from './src/components/pages/Onboarding';
import Login from "./src/components/pages/Login";
import { AuthNavigator } from "./src/components/pages/AuthNavigator";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const navigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: "0"
    }
  };
  const [loading, setLoading] = useState(false); //for splash screen
  const [isLogin, setIsLogin] = useState(false);

  //온보딩용. 페이지 넘어가려면 주석 해제
  // useEffect(() => {
  //   const onboarding = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(onboarding);
  // }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
          {loading ? (
            <Stack.Screen name="Onboarding" component={Onboarding} />
          ) : isLogin ? (
            <Stack.Screen name="MainNavigator" component={MainNavigator} />
          ) : (
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          )}
        </Stack.Navigator>      
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Profile"
          component={Account}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Workshops"
          component={Workshops}
          options={navigationOptions}
        />
        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{ ...navigationOptions, activityId: 0 }}
        />
      </Stack.Navigator> */}

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
