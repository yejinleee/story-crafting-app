import React, { useState } from "react";
import { StyleSheet, Button } from "react-native";
import MainButton from "../elements/button/NextStepButton";
import Page from "./Page";
import ScrollPage from "./ScrollPage";

export default function Home({ navigation }) {
  return (
    <ScrollPage title="Home">
        <MainButton title="Workshops" onPress={() => navigation.navigate('Workshops')}/>
        <MainButton title="Account" onPress={() => navigation.navigate('Profile')}/>
    </ScrollPage>
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
