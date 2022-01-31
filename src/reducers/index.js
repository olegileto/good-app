import { combineReducers } from 'redux'
import { photos } from './photos'

export const rootReducer = combineReducers({
    photosReducer: photos
})