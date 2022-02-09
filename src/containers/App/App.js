import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { usersFetchRequested } from '../../actions/users';
import { selectUsers } from '../../selectors/users';
import HomePage from '../HomePage/HomePage';
import PhotoInformation from '../PhotoInformation/PhotoInformation';

import './App.scss';

const App = () => {
  const location = useLocation();
  const state = location.state;
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  console.log('users', users);

  useEffect(() => {
    dispatch(usersFetchRequested())
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
