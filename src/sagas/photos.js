import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { 
    morePhotosFetchFailed, 
    morePhotosFetchSucceeded, 
    photosFetchFailedd, 
    photosFetchSucceeded 
} from '../actions/photos';
import Api from '../helpers/serviceWorkers';
import { MORE_PHOTOS_FETCH_REQUESTED, PHOTOS_FETCH_REQUESTED } from '../reducers/photos';
import { DEFAULT_PAGE } from '../helpers/constants';
import { BASIC_PHOTOS_URL } from '../helpers/urls';

function* fetchPhotos() {
    try {
        const photos = yield call(Api.get, BASIC_PHOTOS_URL);

        yield put(photosFetchSucceeded(photos));
    } catch(error) {
        yield put(photosFetchFailedd(error.message));
    }
};

function* fetchMorePhotos(action) {
    const { page } = action;
    const defaultPage = page || DEFAULT_PAGE;
    const url = `${BASIC_PHOTOS_URL}&page=${defaultPage}`;

    try {
        const photos = yield call(Api.get, url)
        
        yield put(morePhotosFetchSucceeded(photos));
    } catch(error) {
        yield put(morePhotosFetchFailed(error.message));
    }
}

export function* photosWatcherSaga() {
    yield takeLatest(PHOTOS_FETCH_REQUESTED, fetchPhotos);
    yield takeEvery(MORE_PHOTOS_FETCH_REQUESTED, fetchMorePhotos)
};