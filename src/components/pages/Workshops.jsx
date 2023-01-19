import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, ImageBackground } from "react-native";
import Workshop from "../elements/workshop/Workshop";
import Page from "./Page";
import { theme } from "../../style/theme.style";
import MainButton from "../elements/button/NextStepButton";
import Title from "../elements/layout/Title";
import Avatar from "../elements/avatar/Avatar";
import RoundButton from "../elements/button/RoundButton";
import ScrollPage from "./ScrollPage";
import MainHeader from "../elements/layout/MainHeader";
import Slider from "../elements/layout/Slider";
import backgroundImg from '../../assets/workshop_background.png';

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Workshop {...item} />
    </View>
  );
}

export default function Workshops() {
  const [debugCount, setDebugCount] = useState(3);

  function onAddButton() {
    setDebugCount((d) => d + 1);
  }

  return (
    <ScrollPage title="Workshops" header={<MainHeader icon="star" />}>
      <Title
        style={{ backgroundColor: theme.colors.accent.red}}
        text="Information about StoryCrafting"
      >
        <RoundButton title="i" />
      </Title>
      <ImageBackground style={styles.background} source={backgroundImg} resizeMode="contain" >
      <FlatList
        style={styles.workshopGrid}
        numColumns={1}
        data={[
          {
            name: "First Workshop",
            icon: "heart-outline",
            description: "Description of the assignement",
            stars: 2
          },
          {
            name: "Name of the assignment",
            icon: "home-outline",
            description: "Description of the assignement",
            stars: 3
          },
          {
            name: "Name of the assignment",
            icon: "star-outline",
            description: "Description of the assignement",
            stars: 1
          },
          {
            name: "Name of the assignment",
            icon: "camera-outline",
            description: "Description of the assignement",
            stars: 2
          }
        ].map((v, i) => ({...v, rightAligned: i % 2 !== 0 }))}
        renderItem={Item}
      />
      {/* <MainButton title="Add" onPress={onAddButton} /> */}
      </ImageBackground>
      <Slider value={75} outOf={100} icon="golf-outline" />
    </ScrollPage>
  );
}

const styles = StyleSheet.create({
  workshopGrid: {
    width: "100%",
    paddingTop: 42
  },
  item: {
    flex: 1,
    // maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    padding: theme.spacing.m,
    paddingBottom: 2
  },
  background: {
    width: 420,
    height: "100%",
    marginHorizontal: "auto"
  }
});
