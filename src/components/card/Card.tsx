import React, { useEffect, useState} from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const borderColor = 'rgba(100,100,100,0.5)';

interface CardProps {
  title: string;
  body: string;
}
const Card: React.FC<CardProps> = ({title, body}) => {

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
      <CardHeader title={title} borderColor={borderColor} />
      <View style={styles.body}>
        <Text>{body}</Text>
      </View>
      <CardFooter borderColor={borderColor} />
    </View>
  );
}

export default Card;