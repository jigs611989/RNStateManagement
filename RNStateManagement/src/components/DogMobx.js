
import React from 'react'
import {View, TouchableOpacity, Text, Image, ActivityIndicator} from 'react-native'
import styles from './Styles/DogsStyle'
import {useObserver} from 'mobx-react'

const DogsMobx = (props) => {
    
    const {url, error, loading} = props.store.dog

    const fetchDog = () => {
        props.store.updateDog('', true, false)
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => props.store.updateDog(data.message, false, false))
            .catch(err => props.store.updateDog('', false, true))
    }

    return useObserver(() => (
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
                props.store.dog.url ? 
                    <Image 
                        style={styles.imageView}
                        source={{uri: url}}
                />
                :
                null
            }
        </View>
    ))
}

export default DogsMobx