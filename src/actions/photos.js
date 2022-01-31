import { PHOTOS_FETCH_SUCCEEDED, PHOTOS_FETCH_FAILED, PHOTOS_FETCH_REQUESTED } from "../reducers/photos"

export const photosFetchSucceeded = (photos) => {
    return {
        type: PHOTOS_FETCH_SUCCEEDED,
        photos
    }
};

export const photosFetchFailedd = (message) => {
    return {
        type: PHOTOS_FETCH_FAILED,
        message
    }
};

export const photosFetchRequested = () => {
    return {
        type: PHOTOS_FETCH_REQUESTED
    }
};
