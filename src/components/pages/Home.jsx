import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, FlatList } from "react-native-web";
import Page from "./Page";

export default function Home({ navigation }) {
  return (
    <Page title="Home">
        <Button title="workshops" onPress={() => navigation.navigate('Workshops')}/>
        <Button title="account" onPress={() => navigation.navigate('Profile')}/>
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
  }
});
