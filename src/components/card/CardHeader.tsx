import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from '../common';

interface CardHeaderProps {
  borderColor: string
  title: string;
}
const CardHeader: React.FC<CardHeaderProps> = ({title, borderColor}) => {

  return (
    <View style={[styles.container, {borderBottomColor: borderColor}]} >
      <View style={styles.colSm} >
        <Avatar size='small' color='dark' />
      </View>
      <View style={styles.colLg}>
        <Text style={{color: borderColor}}>{title}</Text>
      </View>
      <View style={styles.colSm} >
        <Text>T</Text>
      </View>
    </View>
  );
}

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: '100%',
    paddingRight: 7,
    paddingLeft: 7,
  },
  colSm: {
    width: '10%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  colLg: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 7,
  }
});