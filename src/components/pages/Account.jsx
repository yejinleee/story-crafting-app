import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { theme } from "../../style/theme.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import Calendar from "../elements/profile/Calendar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-web";
import Backpack from "./account/Backpack";
import Avatar from "./account/Avatar";
import Rewards from "./account/Rewards";
import Card from "../elements/layout/Card";
import Title from "../elements/layout/Title";
import ScrollPage from "./ScrollPage";
import MainHeader from "../elements/layout/MainHeader";
import FullAvatar from "../elements/avatar/FullAvatar";
import { useAvatarContext } from "../../hooks/context/AvatarContext";

const Stack = createNativeStackNavigator();

export default function Account({ navigation }) {
  const [seed, setSeed] = useState(0);
  const avatar =
    useAvatarContext();
  function onAddButton() {
    setSeed((d) => d + 1);
  }

  const Selector = ({ icon, name, onClick, preview }) => {
    const { red, blue, green } = theme.colors.accent;
    const titleColors = { Avatar: red, Backpack: green, Rewards: blue };
    const titleColor = titleColors[name] ?? red;

    return (
      <TouchableOpacity
        onPress={onClick}
        style={{
          ...theme.style.card,
          ...styles.selector,
          borderColor: titleColor,
          borderWidth: 2,
          paddingVertical: theme.spacing.xs,
          paddingHorizontal: theme.spacing.xs
        }}
      >
        <Title text={name} style={{ backgroundColor: titleColor }}></Title>
        <View style={styles.iconSpace}>
          {preview ?? <Ionicons name={icon} color={titleColor} size={48} />}
        </View>
      </TouchableOpacity>
    );
  };

  const Profile = () => (
    <ScrollPage header={<MainHeader icon="settings" title="Profile" />}>
      <Card shadow={true} style={styles.avatarSpace}>
        <View style={styles.avatarSelector}>
          <Selector
            name="Avatar"
            icon="walk-outline"
            preview={<FullAvatar {...avatar}/>}
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
      </Card>
      <Calendar />
    </ScrollPage>
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        screenOptions: {
          backgroundColor: "white",
          screenStyle: { backgroundColor: "blue" }
        }
      }}
    >
      <Stack.Screen
        name="Main"
        component={Profile}
      />
      <Stack.Screen name="Backpack" component={Backpack} />
      <Stack.Screen name="Avatar" component={Avatar} />
      <Stack.Screen name="Rewards" component={Rewards} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  avatarSpace: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 256,
    gap: theme.spacing.l,
    alignItems: "center"
  },
  avatarSelector: {
    flex: 1,
    display: "flex",
    height: "100%"
  },
  title: {
    borderRadius: theme.radius.l,
    paddingVertical: theme.spacing.s,
    marginHorizontal: theme.spacing.m,
    marginTop: theme.spacing.m,
    textAlign: "center",
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.primary
  },
  iconSpace: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  selector: {
    flex: 1,
    display: "flex",
    padding: 0
  },
  selectors: {
    gap: theme.spacing.l,
    minWidth: "30%",
    display: "flex",
    height: "100%",
    flexDirection: "column"
  }
});
