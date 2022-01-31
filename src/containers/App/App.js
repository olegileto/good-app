import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Modal from '../../shared/Modal/Modal';

const App = () => {
const location = useLocation();
const state = location.state;

  return (
    <div className='app-container'>
      <Routes location={state?.backgroundLocation || location}>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/img/:id' element={<Modal />} />
      </Routes>
    </div>
  )
}

export default App;
