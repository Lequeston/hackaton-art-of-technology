import useMap from '@/hooks/useMap';
import { CoordinateMap, Organization } from '@/types/global';
import React, { useEffect } from 'react';
import './Map.scss';

const MAP = "map";

const markers = [
  {
    coordinate: {
      lon: 54.98,
      lat: 82.89
    },
    description: {
      title: "Чебупели"
    }
  },
  {
    coordinate: {
      lon: 54.99,
      lat: 82.89
    },
    description: {
      title: "Чебупели"
    }
  },
  {
    coordinate: {
      lon: 55.00,
      lat: 82.89
    },
    description: {
      title: "Чебупели"
    }
  },
  {
    coordinate: {
      lon: 55.01,
      lat: 82.89
    },
    description: {
      title: "Чебупели"
    }
  },
  {
    coordinate: {
      lon: 55.02,
      lat: 82.89
    },
    description: {
      title: "Чебупели"
    }
  }
];

const position: CoordinateMap = {lon: 54.98, lat: 82.95};

const Map = () => {
  const {setMarkers, setPosition} = useMap(MAP, position);
  useEffect(() => {
    setMarkers(markers);
  }, []);

  return (
    <div id={MAP} className="map"></div>
  )
}

export default Map;