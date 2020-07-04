
import React from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import DogCreator from '../redux/DogRedux'
import styles from './Styles/DogsStyle'

const DogsSaga = (props) => {
    
    const dog = useSelector(state => state)
    const dispatch = useDispatch()

    const {url, error, loading} = dog

    const fetchDog = () => {
        dispatch(DogCreator.requestDogSaga())
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={fetchDog}
                style={styles.buttonView}
            >
                <Text>
                    Refresh
                </Text>
            </TouchableOpacity>
            {
                loading ? 
                <ActivityIndicator
                    size="large"
                    color="red"
                    animating={true}
                />
                :
                null
            }
            {
                url ? 
                    <Image 
                        style={styles.imageView}
                        source={{uri: url}}
                />
                :
                null
            }
        </View>
    )
}

export default DogsSaga