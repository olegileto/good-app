import { 
    USER_PROFILE_FETCH_SUCCEEDED, 
    USRE_PROFILE_FETCH_FAILED, 
    USER_PROFILE_FETCH_REQUESTED 
} from '../reducers/users';

export const userProfileFetchSucceeded = (userProfile) => {
    return {
        type: USER_PROFILE_FETCH_SUCCEEDED,
        userProfile
    }
};

export const userProfileFetchFailed = (message) => {
    return {
        type: USRE_PROFILE_FETCH_FAILED,
        message
    }
};

export const userProfileFetchRequested = (username) => {
    return {
        type: USER_PROFILE_FETCH_REQUESTED,
        username
    }
}