import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import './App.scss';


import Header from "./components/Header";
import Map from "./components/Map";

import { getUserPosition } from '@redux/Location/LocationAction';
import { AppStateType } from './types/global';

type MapStateToPropsType = {};

type MapDispatchToPropsType = {
  getUserPosition: any
};

type OwnPropsType = {};

type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

const App: React.FC<Props> = ({ getUserPosition }) => {
  useEffect(() => {
    getUserPosition();
  }, []);

  return (
    <>
      <Header/>
      <Map/>
    </>
  )
}

const mapStateToProps = (): MapStateToPropsType => ({});

const mapDispatchToProps: MapDispatchToPropsType = {
  getUserPosition
};

const connector = connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, mapDispatchToProps);

export default connector(App);
