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
import DogsMobx from '../components/DogMobx';
import listStore from '../mobx/dogStore';

const MobxExample = () => {
    return (
        <View style={styles.containerView}>
            <DogsMobx store={listStore}/>
        </View>
    )
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1, 
  }
});

export default MobxExample;
