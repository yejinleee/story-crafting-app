import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header= ({left, right}) => {
  return (
    <View style={[styles.headerWrap]}>
        <View style={[styles.headerContents]}>
            <View style={styles.left}>
                <Text style={styles.leftText}>{left}</Text>
            </View>
            <View style={styles.right}>
                {right === 0 ? (
                    <Image source={require('../../../assets/backpackLogo.png')} style={{width: 28, height: 28}} />
                    ) : (
                    <Text style={styles.rightText}>{right}/4</Text>
                )}
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    height: 65,
    marginLeft: 9,
    marginRight: 9,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  headerContents: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    width: 206,
    height: 32,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    color: 'black',
  },
  rightText: {
    color: '#FF8E8E',
  },
  right:{

  },
});
