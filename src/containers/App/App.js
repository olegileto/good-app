import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { userProfileFetchRequested } from '../../actions/users';
import HomePage from '../HomePage/HomePage';
import PhotoInformation from '../PhotoInformation/PhotoInformation';

import './App.scss';

const App = () => {
  const location = useLocation();
  const state = location.state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfileFetchRequested('microsoft365'))
  }, [dispatch])

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
