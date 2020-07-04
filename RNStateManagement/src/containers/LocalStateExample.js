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
import Dog from '../components/DogLocalState';

const LocalStateExample = () => {
  
  return (
      <View style={styles.containerView}>
          <Dog />
      </View>
  )
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1, 
  }
});

export default LocalStateExample;
