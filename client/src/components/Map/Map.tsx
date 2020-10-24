import useMap from '@/hooks/useMap';
import { AppStateType, CoordinateMap, Organization } from '@/types/global';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Map.scss';

const MAP = "map";

const Map = () => {
  const {setMarkers, setPosition} = useMap(MAP);
  const user = useSelector((state: AppStateType) => state.location.user);
  const organization = useSelector((state: AppStateType) => state.location.organizations);

  useEffect(() => {
    console.log('-----', user.coordinate);
    setPosition(user.coordinate);
  }, [user]);

  useEffect(() => {
    console.log(organization);
    setMarkers(organization);
  }, [organization]);
  
  return (
    <div id={MAP} className="map"></div>
  )
}

export default Map;