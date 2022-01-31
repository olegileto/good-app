import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { photosFetchRequested } from '../../actions/photos';
import Photos from '../Photos/Photos';

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosFetchRequested());
  }, [dispatch]);

  return (
    <div className='app'>
      <Photos />
    </div>
  )
}

export default App;
