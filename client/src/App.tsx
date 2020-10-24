import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import './App.scss';


import Header from "./components/Header";
import Map from "./components/Map";

import { getUserPosition, fetchOrganizations } from '@redux/Location/LocationAction';
import { AppStateType, CoordinateMap } from './types/global';

type MapStateToPropsType = {
  filter: string,
  coordinate: CoordinateMap | null
};

type MapDispatchToPropsType = {
  getUserPosition: any,
  fetchOrganizations: any
};

type OwnPropsType = {};

type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

const App: React.FC<Props> = ({ getUserPosition, fetchOrganizations, filter, coordinate }) => {
  useEffect(() => {
    getUserPosition();
  }, []);

  useEffect(() => {
    fetchOrganizations(coordinate, filter);
  }, [coordinate, filter]);
  
  return (
    <>
      <Header/>
      <Map/>
    </>
  )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  filter: state.location.filter,
  coordinate: state.location.user.coordinate
});

const mapDispatchToProps: MapDispatchToPropsType = {
  getUserPosition,
  fetchOrganizations
};

const connector = connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, mapDispatchToProps);

export default connector(App);
