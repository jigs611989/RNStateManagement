import React from 'react';
import { View, Alert } from 'react-native';
import Button from '../components/Button'

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Local State' onPress={() => navigation.navigate('Local State')} />
        <Button title='Redux' onPress={() => navigation.navigate('Redux')} />
        <Button title='Redux Thunk' onPress={() => Alert.alert('TO DO')} />
        <Button title='Redux Saga' onPress={() => Alert.alert('TO DO')} />
        <Button title='Mobx' onPress={() => Alert.alert('TO DO')} />
      </View>
    );
}

export default HomeScreen