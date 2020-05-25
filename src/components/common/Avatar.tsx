import React, {useState} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AvatarProps {
  uri?: string,
  size?: 'large' | 'small',
  color?: 'light' | 'dark',
}

const Avatar: React.FC<AvatarProps> = ({uri, size, color = 'light'}) => {
  const [iconSize] = useState(() => {
    if (size === 'small') {
      return { width: 30, height: 30 };
    }
    return { width: 40, height: 40}
  });

  const [baseColor] = useState(() => {
    if (color === 'dark') return '#000000';
    if (color === 'light') return '#ffffff';
  })
  
  return (
    <View style={[styles.container, {
      width: iconSize.width,
      height: iconSize.height,
      borderRadius: (iconSize.width / 2),
      borderColor: baseColor,
    }]}>
      {
        uri ? 
        <Image source={{uri}} style={{height: iconSize.height, width: iconSize.width}} /> :
        <MaterialCommunityIcons name="face" color={'#fff'} size={26} />
      }
    </View>
  );
}

export {Avatar};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
})
