
import { createStore, applyMiddleware } from 'redux'
import { dogReducer } from './DogRedux'
import thunk from 'redux-thunk'
 
export default () => {
    const store = createStore(dogReducer, applyMiddleware(thunk))
    return { store }
}
