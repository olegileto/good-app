import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Photos from '../Photos/Photos';
import { OFFSET_Y } from '../../helpers/constants';
import { photosFetchRequested, morePhotosFetchRequested } from '../../actions/photos';

const HomePage = () => {
    const dispatch = useDispatch();
    let page = 1;

    const handleScroll = useCallback(() => {
        if ((window.innerHeight + window.pageYOffset + 2500) >= (document.body.offsetHeight)) {
            page++
            dispatch(morePhotosFetchRequested(page));
        }
    }, [dispatch, page]);

    useEffect(() => {
        dispatch(photosFetchRequested());
        window.addEventListener("scroll", handleScroll);
  
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, [dispatch, handleScroll]);

    return <Photos />;
}

export default HomePage;