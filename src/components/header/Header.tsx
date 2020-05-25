import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Avatar } from '../common';

const Header: React.FC = (props) => {
  const { container, textStyle, colMid, colOutter } = styles;
  return (
    <View style={container}>
      <View style={colOutter}>
        {/* Handle no image found by returnig src empty */}
        <Avatar size='small' />
      </View>
      <View style={colMid}>
      <Text style={textStyle}>Friendly Face</Text>
      </View>
      <View style={colOutter} />
    </View>
  );
}

export default Header;
