import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const GobackHeader = ({goBack, title}) => {
  return (
    <View style={[styles.headerWrap]}>
      <TouchableOpacity onPress={goBack}>
        <View style={[styles.backButton]}>
          <Icon name="arrow-left" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={[{color: 'black'}]}>{title}</Text>
      </View>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  saveButton: {
    marginRight: 16,
    color: '#6C69FF',
    fontSize: 16,
  },
  disable: {opacity: 0},
  progressText: {
    color: '#949494',
    fontSize: 16,
  },
});
