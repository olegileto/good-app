import { USERS_FETCH_SUCCEEDED, USRES_FETCH_FAILED, USERS_FETCH_REQUESTED } from '../reducers/users';

export const usersFetchSucceeded = (users) => {
    return {
        type: USERS_FETCH_SUCCEEDED,
        users
    }
};

export const usersFetchFailed = (message) => {
    return {
        type: USRES_FETCH_FAILED,
        message
    }
};

export const usersFetchRequested = () => {
    return {
        type: USERS_FETCH_REQUESTED
    }
}