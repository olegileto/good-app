import {call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import { 
    morePhotosFetchFailed, 
    morePhotosFetchSucceeded, 
    photosFetchFailedd, 
    photosFetchSucceeded 
} from '../actions/photos';
import Api from '../helpers/serviceWorkers';
import { MORE_PHOTOS_FETCH_REQUESTED, PHOTOS_FETCH_REQUESTED } from '../reducers/photos';

function* fetchPhotos() {
    try {
        const photos = yield call(Api.fetchPhotos);
        yield put(photosFetchSucceeded(photos));
    } catch (e) {
        yield put(photosFetchFailedd(e.message));
    }
};

function* fetchMorePhotos(action) {
    const { page } = action;

    try {
        const photos = yield call(Api.fetchPhotos, page)
        yield delay(200);
        yield put(morePhotosFetchSucceeded(photos));
    } catch(e) {
        yield put(morePhotosFetchFailed(e.message));
    }
}

export function* photosWatcherSaga() {
    yield takeLatest(PHOTOS_FETCH_REQUESTED, fetchPhotos);
    yield takeEvery(MORE_PHOTOS_FETCH_REQUESTED, fetchMorePhotos)
};