import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../elements/layout/Header";
import { InterestBtn } from "./avatarComponents";
import { personalDataInterst } from "../../../state/personalData";
import { useRecoilState } from 'recoil';


// 정렬 ....
export default function Backpack2() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('MainNavigator');
    }
    // ..... !------------
    const [interst, setInterst] = useRecoilState(personalDataInterst);

    const handleOnpress = (selected) => {
      if (interst.includes(selected)) {
        const newInterset = interst.filter((i) => i !==selected);
        setInterst(newInterset);
      } else{
        setInterst((prev) => [...prev, selected])
      }
    }
    const interest = ['Music', 'Sport','Cooking','Travel','Dancing','Exhibition','Festival','Reading','Game','Nature','Movie','Crafting']
    const interestIcon = ['🎤','⚽️','🍳','🌎','💃','🖼️','🎊','📚','🎮','🏔️','🎥','🔨']
    const Item = ({ item }) => (
      <>
      <View style={[styles.center, {width: '33%'}]}>
      {/* <View style={[styles.center, {marginLeft: 36, marginRight: 36, marginBottom: 25 }]}> */}
        <InterestBtn text={interest[item]} icon={interestIcon[item]} isSelected={true} serialN={item} handleOnpress={() => handleOnpress(String(item))}/>
      </View>
      </>
    );
    
    return(
      <Page>
          <Header left={'Collect your backpack'} right={0} />
          <View style={styles.contents}>
              <View style={styles.textWrap}>
                  <Text>What are you interesed in?</Text>
                  <Text>Mulitple selection possible</Text>
              </View>
              <View style={styles.center}>
                <FlatList
                  style={{width: "100%"}}
                  numColumns={3}
                  renderItem={Item}
                  data={interest.map((_,i) => i)}
                />
              </View>
          </View>
          <MainButton title="next step" onPress={onpressNextstep}></MainButton>

      </Page>
    );
}

const styles = StyleSheet.create({
    contents: {
      flex: 1,
      justifyContent: 'center',
    },
    textWrap: {
      alignItems: 'center',
      paddingBottom: 37,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      width: 65,
      height: 65,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.1)',
    },
    borderCircle: {

    }
  });
