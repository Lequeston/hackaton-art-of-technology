import useMap from '@/hooks/useMap';
import React, { useState, useEffect } from 'react';
import './Map.scss';

const MAP = "map";

const markers = [
  {lon: 54.98, lat: 82.89, info: "Чебупели"},
  {lon: 54.99, lat: 82.89, info: "Чебупели"},
  {lon: 55.00, lat: 82.89, info: "Чебупели"},
  {lon: 55.01, lat: 82.89, info: "Чебупели"},
  {lon: 55.02, lat: 82.89, info: "Чебупели"}
]

const position = {lon: 54.98, lat: 82.95, info: "Чебупели"};

const Map = () => {
const [setMarkers, setPosition] = useMap(MAP, position);

useEffect(() => {setMarkers(markers)});

  return (
    <div id={MAP} className="map"></div>
  )
}

export default Map;