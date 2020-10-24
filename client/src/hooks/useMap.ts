import { useState, useEffect } from 'react';
import DG from "2gis-maps";

const useMap = (id, initialPosition,) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    try {
    setMap(DG.map(id, {
      'center': [position.lon, position.lat],
      'zoom': 13
    }));
    } catch(e) {console.error(e)};
  }, [position]);

  useEffect(() => {
    try {
      if(map) {
        markers.forEach(marker => {
          console.log(marker.lon, marker.lat);
          DG.marker([marker.lon, marker.lat]).addTo(map).bindPopup(marker.info);
        });
      }
    } catch(e) {console.error(e)};
  }, [markers]);

  return [setMarkers, setPosition];
};

export default useMap;
