import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';

import { getUserPosition } from '@redux/Location/LocationAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosition)();
  }, []);

  return (
    <h1>Hello, world</h1>
  );
}

export default App;