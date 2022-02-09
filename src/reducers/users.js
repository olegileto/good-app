export const USER_PROFILE_FETCH_SUCCEEDED = 'USERS_FETCH_SUCCEEDED';
export const USRE_PROFILE_FETCH_FAILED = 'USRES_FETCH_FAILED';
export const USER_PROFILE_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED';

const initialState = {
    userProfile: {},
    username: '',
    isLoading: false
}

export const users = (state = initialState, action) => {
    switch(action.type) {
        case USER_PROFILE_FETCH_SUCCEEDED:
            return {...state, isLoading: false, userProfile: action.userProfile};
        case USRE_PROFILE_FETCH_FAILED:
            return {...state, isLoading: false, error: action.message};
        case USER_PROFILE_FETCH_REQUESTED:
            return {...state, isLoading: true, username: action.username}
        default:
            return state;
    }
}