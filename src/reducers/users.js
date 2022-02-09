export const USERS_FETCH_SUCCEEDED = 'USERS_FETCH_SUCCEEDED';
export const USRES_FETCH_FAILED = 'USRES_FETCH_FAILED';
export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED';

const initialState = {
    users: [],
    isLoading: false
}

export const users = (state = initialState, action) => {
    switch(action.type) {
        case USERS_FETCH_SUCCEEDED:
            return {...state, isLoading: false, users: action.users};
        case USRES_FETCH_FAILED:
            return {...state, isLoading: false, error: action.message};
        case USERS_FETCH_REQUESTED:
            return {...state, isLoading: true}
        default:
            return state;
    }
}