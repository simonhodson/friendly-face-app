import React,{useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import styles from './styles';
import Card from '../../components/card/Card';
import { Title } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

type dataType = {id: string, title: string, body: string};

interface LikeItem {
  userId: string;
}

type LikeData = (number & LikeItem) [];

interface DBProps {
  [key: string]: {
    displayName: string;
    data: {text: string};
    comments: string[];
    likes: {}[];
  };
}

export interface PostProps {
  name: string;
  postId: string;
  key: string;
  data: {text: string};
  likes: any[];
  comments:  any[];
}

const Home: React.FC = () => {
  const { container } = styles;

  const [postsRef] = useState(() => {
    return database().ref('posts');
  });
  const [posts, setPosts] = useState<DBProps>({});

  useEffect(() => {
    postsRef.on('value', (snapshot: any) => {
      setPosts(snapshot.val());
    });
    return () => postsRef.off();
  }, [postsRef]);

  function returnPosts() {
    let temp: PostProps[] = [];
      for (const prop in posts) {
        temp.push({
            name: posts[prop].displayName,
            postId: prop,
            key: prop,
            data: posts[prop].data,
            likes: posts[prop].likes,
            comments: posts[prop].comments,
          });
      }
    return temp;
  }

  
  return (
    <SafeAreaView style={container}>
      <View style={{margin: 10}} />
      <FlatList
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        data={returnPosts()}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}

export default Home;