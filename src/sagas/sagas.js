import { all } from 'redux-saga/effects';
import { photosWatcherSaga } from './photos';

function* sagas() {
    yield all([
        photosWatcherSaga()
    ])
}

export default sagas;