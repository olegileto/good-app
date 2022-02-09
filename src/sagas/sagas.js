import { all } from 'redux-saga/effects';
import { photosWatcherSaga } from './photos';
import { usersWatcherSaga } from './users';

function* sagas() {
    yield all([
        photosWatcherSaga(),
        usersWatcherSaga()
    ])
}

export default sagas;