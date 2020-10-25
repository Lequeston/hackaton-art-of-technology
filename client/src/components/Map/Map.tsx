import useMap from '@/hooks/useMap';
import { AppStateType, CoordinateMap, Organization } from '@/types/global';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Map.scss';

const MAP = "map";

const Map = () => {
  const user = useSelector((state: AppStateType) => state.location.user);
  const {setMarkers, setPosition} = useMap(MAP, user.coordinate);
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