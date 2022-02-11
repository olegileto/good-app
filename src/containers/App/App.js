import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import PhotoInformation from '../PhotoInformation/PhotoInformation';

import './App.scss';

const App = () => {
  const location = useLocation();
  const state = location.state;

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
