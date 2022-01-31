import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './selectors/photos';
import { photosFetchRequested } from './actions/photos';

const App = () => {
  const photos = useSelector(getPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosFetchRequested());
  }, [dispatch]);

  return (
    <div>
      <div>{JSON.stringify(photos)}</div>
    </div>
  )
}

export default App;
