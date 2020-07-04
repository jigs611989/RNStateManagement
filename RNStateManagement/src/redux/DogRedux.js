import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    requestDog: null,
    requestDogSuccess: ['data'],
    requestDogFailure: null
})

console.log('Dog Redux: ', { Types, Creators })

export const DogTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    url: '',
    loading: false,
    error: false,
};

const requestDogHandler = (state, action) => {
    console.log('requestDogHandler: ', {state, action})
    return { loading: true, url: '', error: false}
}

const requestDogSuccessHandler = (state, {data}) => {
    console.log('requestDogSuccessHandler: ', {state, data})
    const {message} = data
    return { loading: false, url: message, error: false}
}

const requestDogFailedHandler = (state) => {
    console.log('requestDogSuccessHandler: ')
    return { loading: false, url: '', error: true}
}

const Handlers = {
    [Types.REQUEST_DOG]: requestDogHandler,
    [Types.REQUEST_DOG_SUCCESS]: requestDogSuccessHandler,
    [Types.REQUEST_DOG_FAILURE]: requestDogFailedHandler
}

export const dogReducer = createReducer(INITIAL_STATE, Handlers)
