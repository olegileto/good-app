import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Photos from '../Photos/Photos';
import { photosFetchRequested } from '../../actions/photos';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(photosFetchRequested());
    }, [dispatch]);

    return <Photos />;
}

export default HomePage;