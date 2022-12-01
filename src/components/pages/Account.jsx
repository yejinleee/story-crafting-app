import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { theme } from "../../style/theme.style";
import MainButton from "../elements/button/MainButton";
import Divider from "../elements/layout/Divider";
import Page from "./Page";
import Ionicons from "@expo/vector-icons/Ionicons";
import Calendar from "../elements/profile/Calendar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import { TouchableOpacity } from "react-native-web";
import Backpack from "./account/Backpack";
import Avatar from "./account/Avatar";
import Rewards from "./account/Rewards";

const Stack = createNativeStackNavigator();

export default function Account({ navigation }) {
  const [seed, setSeed] = useState(0);

  function onAddButton() {
    setSeed((d) => d + 1);
  }

  const Selector = ({ icon, name, onClick }) => (
    <TouchableOpacity onPress={onClick} style={styles.selector}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.iconSpace}>
        <Ionicons name={icon} size={48} />
      </View>
    </TouchableOpacity>
  );

  const Profile = () => (
    <>
      <View style={styles.avatarSpace}>
        <View style={styles.avatarSelector}>
          <Selector
            name="Avatar"
            icon="walk-outline"
            onClick={() => navigation.navigate("Avatar")}
          />
        </View>
        <View style={styles.selectors}>
          <Selector
            name="Backpack"
            icon="briefcase-outline"
            onClick={() => navigation.navigate("Backpack")}
          />
          <Selector
            name="Rewards"
            icon="trophy-outline"
            onClick={() => navigation.navigate("Rewards")}
          />
        </View>
      </View>
      <Divider />
      <Calendar />
    </>
  );

  return (
    <Page title="Account">
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Backpack" component={Backpack} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Rewards" component={Rewards} />
      </Stack.Navigator>
    </Page>
  );
}

const styles = StyleSheet.create({
  avatarSpace: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "45%",
    gap: theme.spacing.l,
    padding: theme.spacing.l,
    alignItems: "center",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.m
  },
  avatarSelector: {
    flex: 1,
    display: "flex",
    height: "100%"
  },
  title: {
    borderRadius: theme.radius.l,
    paddingVertical: theme.spacing.s,
    marginHorizontal: theme.spacing.l,
    marginTop: theme.spacing.m,
    textAlign: "center",
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.card
  },
  iconSpace: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  selector: {
    flex: 1,
    borderRadius: theme.radius.m,
    backgroundColor: theme.colors.card,
    display: "flex"
  },
  selectors: {
    gap: theme.spacing.l,
    minWidth: "30%",
    display: "flex",
    height: "100%",
    flexDirection: "column"
  }
});
