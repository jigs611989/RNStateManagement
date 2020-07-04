
import {createStore} from 'redux'
import { dogReducer } from './DogRedux'

export default () => {
    const store = createStore(dogReducer)
    return { store }
}
