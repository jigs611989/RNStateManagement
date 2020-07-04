
import React, {useState} from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles/DogsStyle'

const Dog = (props) => {
    
    const [dog, setDog] = useState({
        url: '',
        loading: false,
        error: false,
    })
    
    const {url, error, loading} = dog

    const fetchDog = () => {
        setDog({url: '', loading: true, error: false,})
        return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setDog({url: data.message, loading: false, error: false}))
        .catch(err => setDog({url: '', loading: false, error: true}))
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

export default Dog