import { call, put, takeLatest } from 'redux-saga/effects'; 
import { userProfileFetchSucceeded, userProfileFetchFailed } from '../actions/users';
import { USER_PROFILE_FETCH_REQUESTED } from '../reducers/users';
import Api from '../helpers/serviceWorkers';
import { BASIC_USERS_URL } from '../helpers/urls';

function* fetchUserProfile(action) {
    try {
        const userProfileUrl = BASIC_USERS_URL(action.username)
        const userProfile = yield call(Api.get, userProfileUrl);

        yield put (userProfileFetchSucceeded(userProfile))

    } catch(error) {
        return userProfileFetchFailed(error.message);
    }
};

export function* usersWatcherSaga() {
    yield takeLatest(USER_PROFILE_FETCH_REQUESTED, fetchUserProfile);
}