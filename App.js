/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  LogBox, 
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import FARouter from './src/FARouter';
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import store from './src/Store';

class App extends Component {


  componentDidMount() {
    LogBox.ignoreAllLogs(true);
    setTimeout(() => {
      SplashScreen.hide(); //for hiding splash screen  
    }, 3000);
  }

  render() {
    return (
      <Provider store={store}>
        <NativeBaseProvider>
          <View style={{ flex: 1 }}>
            <FARouter />
          </View>
        </NativeBaseProvider>
      </Provider>
    );
  }

};

export default App;
