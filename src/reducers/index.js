import { combineReducers } from 'redux'
import { photos } from './photos'
import { users } from './users';

export const rootReducer = combineReducers({
    photosReducer: photos,
    usersReducer: users
})