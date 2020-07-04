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
import DogThunk from '../components/DogThunk';
import createStore from '../redux';

const ReduxThunkExample = () => {

  const { store } = createStore()
  
  return (
    <Provider store={store}>
        <View style={styles.containerView}>
            <DogThunk />
        </View>
    </Provider>
  )
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1, 
  }
});

export default ReduxThunkExample;
