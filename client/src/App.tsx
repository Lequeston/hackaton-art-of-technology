import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';


import Header from "./components/Header";
import Map from "./components/Map";

import { getUserPosition } from '@redux/Location/LocationAction';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosition)();
  }, []);

  return (
    <>
      <Header/>
      <Map/>
    </>
  )
}

export default App;