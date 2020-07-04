
import React from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import DogCreator from '../redux/DogRedux'
import styles from './Styles/DogsStyle'

const DogsThunk = (props) => {
    
    const dog = useSelector(state => state)
    const dispatch = useDispatch()

    const {url, error, loading} = dog

    const fetchDog = () => {

        return (dispatch) => {
            dispatch(DogCreator.requestDog())
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => dispatch(DogCreator.requestDogSuccess(data)))
            .catch(err => dispatch(DogCreator.requestDogFailure()))
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => dispatch(fetchDog())}
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

export default DogsThunk