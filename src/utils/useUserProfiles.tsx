import {useState, useEffect} from 'react';
import { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';

export default function useIsOnline() {
  const[user, setUser] = useState(() => { 
    const user = firebase.auth().currentUser; 
    return { ...user }
  });

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({...user})
      }
    });
    return () => unsub();
  }, []);

  return user;
}