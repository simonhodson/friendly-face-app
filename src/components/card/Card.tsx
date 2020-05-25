import React, { useEffect, useState} from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import { PostProps } from './../../screens/home/Home';

const borderColor = 'rgba(100,100,100,0.5)';

const Card: React.FC<PostProps> = ({data, name}) => {

  const [width, setWidth] = useState(() => {
    const { height, width } = Dimensions.get('screen');
    return width;
  });

  useEffect(() => {
    const { height, width } = Dimensions.get('screen');
    setWidth(width);
  }, [Dimensions])

  return (
    <View style={[styles.container, {width: (width * 0.9), borderColor }]} >
      <CardHeader title={name} borderColor={borderColor} />
      <View style={styles.body}>
        <Text>{data.text !== undefined ? data.text : ''}</Text>
      </View>
      <CardFooter borderColor={borderColor} />
    </View>
  );
}

export default Card;