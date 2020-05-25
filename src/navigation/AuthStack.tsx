import * as React from 'react';
import { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Login from '../screens/authscreens/Login';
import { ActivityIndicator, Colors } from 'react-native-paper';
import TabNavigator from './TabNavigator';
import Header from '../components/header/Header';
// import Splashscreen from '../screens/splashscreen/splashscreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const AuthStack = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState<boolean>(true);

  // Handle user state changes globally
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null): void {
    if (user) {
      setUser(user);
      setInitializing(false);
    } else {
      bootstrap();
    }
  }

  const bootstrap = (): void => {
    const verifyUser = auth().currentUser;
    if (verifyUser) {
      setUser(verifyUser);
      setInitializing(false);
    } else {
      setInitializing(false);
    }
  };

  useEffect(() => {
    bootstrap();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}} >
        <ActivityIndicator
          animating={true}
          color='#058ed9'
          size='large'
        />
      </View>
    )
  }

  return (
      <Stack.Navigator>
        { !user ? (
          <Stack.Screen
            name="Sign In"
            component={Login}
          />
        ) : (
          <Stack.Screen
            name="Freindly Face"
            component={TabNavigator}
            options={{
              header: (props) => <Header { ...props} />,
              headerStyle: { 
                height: 60,       
                backgroundColor: "transparent"      
              }
            }}
          />
        )}
      </Stack.Navigator>
  );
};

export default AuthStack;