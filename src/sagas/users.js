import { call, put, takeLatest } from 'redux-saga/effects'; 
import { usersFetchSucceeded, usersFetchFailed } from '../actions/users';
import { USERS_FETCH_REQUESTED } from '../reducers/users';
import Api from '../helpers/serviceWorkers';
import { BASIC_USERS_URL } from '../helpers/urls';

function* fetchUsers() {
    try {
        const users = yield call(Api.get, `${BASIC_USERS_URL}:Tezos`);

        yield put (usersFetchSucceeded(users))

    } catch(error) {
        return usersFetchFailed(error.message);
    }
};

export function* usersWatcherSaga() {
    yield takeLatest(USERS_FETCH_REQUESTED, fetchUsers);
}