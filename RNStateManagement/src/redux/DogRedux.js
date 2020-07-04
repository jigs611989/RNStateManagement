import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    requestDog: null,
    requestDogSaga: null,
    requestDogSuccess: ['data'],
    requestDogFailure: null
})

export const DogTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    url: '',
    loading: false,
    error: false,
};

const requestDogHandler = (state, action) => {
    return { loading: true, url: '', error: false}
}

const requestDogSuccessHandler = (state, {data}) => {
    const {message} = data
    return { loading: false, url: message, error: false}
}

const requestDogFailedHandler = (state) => {
    return { loading: false, url: '', error: true}
}

const Handlers = {
    [Types.REQUEST_DOG]: requestDogHandler,
    [Types.REQUEST_DOG_SAGA]: requestDogHandler,
    [Types.REQUEST_DOG_SUCCESS]: requestDogSuccessHandler,
    [Types.REQUEST_DOG_FAILURE]: requestDogFailedHandler
}

export const dogReducer = createReducer(INITIAL_STATE, Handlers)
