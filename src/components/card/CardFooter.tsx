import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from '../common';

interface CardFooterProps {
  borderColor: string;
}
const CardFooter: React.FC<CardFooterProps> = ({borderColor}) => {

  return (
    <View style={[styles.container, {borderTopColor: borderColor}]} >
      <View style={styles.colSm} >
        <View style={{flexDirection: 'row', justifyContent: "flex-start"}}>
            <MaterialCommunityIcons name="message-text-outline" size={18}/>
            <Text style={styles.footerText}>{`0 comments`}</Text>
        </View>
      </View>
      <View style={styles.colLg} />
      <View style={styles.colSm} >
        <View style={{flexDirection: 'row', justifyContent: "flex-end"}}>
          <AntDesign name="like2" size={18}/>
          <Text style={styles.footerText}>{`0 likes`}</Text>
      </View>
        </View>
    </View>
  );
}

export default CardFooter;

const styles = StyleSheet.create({
  container: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    flexDirection: 'row',
    width: '100%',
    paddingRight: 7,
    paddingLeft: 7,
  },
  colSm: {
    width: '30%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  colLg: {
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    paddingLeft: 7,
  },
});