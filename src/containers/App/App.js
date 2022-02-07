import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { photosFetchRequested, morePhotosFetchRequested } from '../../actions/photos';
import HomePage from '../HomePage/HomePage';
import PhotoInformation from '../PhotoInformation/PhotoInformation';
import { OFFSET_Y } from '../../helpers/constants';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = location.state;

  let page = 1;

  const handleScroll = useCallback(() => {
    if ((window.innerHeight + window.pageYOffset + OFFSET_Y) >= (document.body.offsetHeight)) {
        page++;
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

  return (
    <div className='app-container'>
      <Routes location={state?.backgroundLocation || location}>
        <Route exact path='/' element={<HomePage />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path='/photo/:id' element={<PhotoInformation />} />
        </Routes>
      )}
    </div>
  )
}

export default App;
