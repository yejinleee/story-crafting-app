import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { theme } from "./src/style/theme.style";
import { useState } from "react";
import MainNavigator from "./src/components/pages/MainNavigator";
import Onboarding from "./src/components/pages/Onboarding";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: "0"
    }
  };
  const [loading, setLoading] = useState(true); //for splash screen
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const onboarding = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(onboarding);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        {loading
          ? <Stack.Screen name="Onboarding" component={Onboarding} />
          : isLogin
            ? <Stack.Screen name="MainNavigator" component={MainNavigator} />
            : <Stack.Screen name="MainNavigator" component={MainNavigator} />}
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
