import React, {useState, useEffect} from 'react';
import { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';
import {SafeAreaView, View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';

const Login: React.FC = () => {

  const {container, blank, input} = styles;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  function onSubmit() {
    setLoading(true);
      firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      // Errors
      console.log(err)
    })
  }

  function onAuthChange(user: FirebaseAuthTypes.User | null): void {
    setLoading(false);
    if (user) { 
      // Logged in navigate main
      console.log(`this ${email} and this ${password}`)
    } else {
      // Logged out 
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onAuthChange);
    return unsubscribe;
  }, [])


  return (
      <SafeAreaView style={container}>
        <View  style={blank} />
        <TextInput
          style={input}
          mode='outlined'
          label='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          theme={{ colors: { primary: '#058ed9'}}}
        />
        <View  style={blank} />
        <TextInput
          selectionColor='#058ed9'
          style={input}
          mode='outlined'
          label='Password'
          value={password}
          onChangeText={text => setPassword(text)}
          theme={{ colors: { primary: '#058ed9'}}}
          secureTextEntry
        />
        <View style={blank} />
        <Button
          loading={loading}
          mode="contained"
          color='#058ed9'
          onPress={onSubmit} >
          Submit
        </Button>
      </SafeAreaView>
    );
}

export default Login;