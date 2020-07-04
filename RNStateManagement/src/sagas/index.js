import { takeLatest, all } from 'redux-saga/effects';
import { fetchDogAsync } from './DogSaga'
import { DogTypes } from '../redux/DogRedux'

export default function* root() {
    yield all([
      takeLatest(DogTypes.REQUEST_DOG_SAGA, fetchDogAsync)
    ]);
}