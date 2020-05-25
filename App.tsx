/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';

declare const global: {HermesInternal: null | {}};

const App: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <AuthStack />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
