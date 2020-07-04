import {call, put} from 'redux-saga/effects'
import DogCreator from '../redux/DogRedux'

export function *fetchDogAsync() {
    try {
        let data = yield call(() => {
            return fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
        })
        yield put(DogCreator.requestDogSuccess(data))
    } catch(error) {
        yield put(DogCreator.requestDogFailure())
    }
}
