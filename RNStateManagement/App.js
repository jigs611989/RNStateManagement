/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';

import Navigator from './src/Navigator'

const App: () => React$Node = () => {

  return (
    <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.containerView}>
          <View style={styles.containerView}>
            <Navigator/>
          </View>
        </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1, 
  }
});

export default App;
