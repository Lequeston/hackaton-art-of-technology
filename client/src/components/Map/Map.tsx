import React, { useEffect } from 'react';
import './Map.scss';

import DG from "2gis-maps";

const MAP = "map";

const Map = () => {
  useEffect(() => {
    const map = DG.map(MAP, {
      'center': [54.98, 82.89],
      'zoom': 13
    });
  }, []);

  return (
    <div id={MAP} className="map"></div>
  )
}

export default Map;