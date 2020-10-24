import useMap from '@/hooks/useMap';
import { AppStateType, CoordinateMap, Organization } from '@/types/global';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const Map = () => {
  const {setMarkers, setPosition} = useMap(MAP);
  const user = useSelector((state: AppStateType) => state.location.user);

  useEffect(() => {
    console.log('-----', user.coordinate);
    setPosition(user.coordinate);
  }, [user]);

  return (
    <div id={MAP} className="map"></div>
  )
}

export default Map;