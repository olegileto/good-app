import { call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import { 
    morePhotosFetchFailed, 
    morePhotosFetchSucceeded, 
    photosFetchFailedd, 
    photosFetchSucceeded 
} from '../actions/photos';
import Api from '../helpers/serviceWorkers';
import { MORE_PHOTOS_FETCH_REQUESTED, PHOTOS_FETCH_REQUESTED } from '../reducers/photos';
import { BASIC_URL, DEFAULT_PAGE } from '../helpers/constants';

function* fetchPhotos() {
    try {
        const photos = yield call(Api.get, BASIC_URL);
        yield put(photosFetchSucceeded(photos));
    } catch (e) {
        yield put(photosFetchFailedd(e.message));
    }
};

function* fetchMorePhotos(action) {
    const { page } = action;
    const defaultPage = !page ? DEFAULT_PAGE : page;
    const url = `${BASIC_URL}&page=${defaultPage}`;

    try {
        const photos = yield call(Api.get, url)
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