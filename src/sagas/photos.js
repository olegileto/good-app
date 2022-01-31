import {call, put, takeLatest } from 'redux-saga/effects';
import { photosFetchFailedd, photosFetchSucceeded } from '../actions/photos';
import Api from '../helpers/serviceWorkers';
import { PHOTOS_FETCH_REQUESTED } from '../reducers/photos';

function* fetchPhotos() {
    try {
        const photos = yield call(Api.fetchPhotos);
        yield put(photosFetchSucceeded(photos));
    } catch (e) {
        yield put(photosFetchFailedd(e.message));
    }
};

export function* photosWatcherSaga() {
    yield takeLatest(PHOTOS_FETCH_REQUESTED, fetchPhotos);
};