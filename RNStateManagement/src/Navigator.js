import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './containers/HomeScreen'
import LocalStateExample from './containers/LocalStateExample'
import ReduxExample from './containers/ReduxExample'
import ReduxThunkExample from './containers/ReduxThunkExample'

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Local State" component={LocalStateExample} />
                <Stack.Screen name="Redux" component={ReduxExample} />
                <Stack.Screen name="Redux Thunk" component={ReduxThunkExample} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator