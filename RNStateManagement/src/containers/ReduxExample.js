/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import DogRedux from '../components/DogRedux';
import createStore from '../redux';

const ReduxExample = () => {

  const { store } = createStore()
  console.log('stoe: ', store.getState())
  return (
    <Provider store={store}>
        <View style={styles.containerView}>
            <DogRedux />
        </View>
    </Provider>
  )
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1, 
  }
});

export default ReduxExample;
