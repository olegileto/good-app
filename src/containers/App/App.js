import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { photosFetchRequested } from '../../actions/photos';
import HomePage from '../HomePage/HomePage';
import Modal from '../../shared/Modal/Modal';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = location.state;

  useEffect(() => {
      dispatch(photosFetchRequested());
  }, [dispatch]);

  return (
    <div className='app-container'>
      <Routes location={state?.backgroundLocation || location}>
        <Route exact path='/' element={<HomePage />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path='/photo/:id' element={<Modal />} />
        </Routes>
      )}
    </div>
  )
}

export default App;
