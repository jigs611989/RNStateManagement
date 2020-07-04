
import { createStore, applyMiddleware } from 'redux'
import { dogReducer } from './DogRedux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

export default () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(dogReducer, applyMiddleware(thunk, sagaMiddleware))
    const sagasManager = sagaMiddleware.run(rootSaga)
    return { store }
}
