import React,{useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const Post: React.FC = () => {
  const { container } = styles;
  return (
    <SafeAreaView style={container}>
      <Text>Post</Text>
    </SafeAreaView>
  );
}

export default Post;