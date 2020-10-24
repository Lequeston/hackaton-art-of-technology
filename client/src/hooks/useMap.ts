import { useState, useEffect } from 'react';
import DG from "2gis-maps";
import { CoordinateMap, Organization } from '@/types/global';

const ZOOM = 13;

const useMap = (id: string, initialPosition: CoordinateMap) => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<Array<Organization>>([]);
  const [position, setPosition] = useState<CoordinateMap>(initialPosition);

  useEffect(() => {
    try {
    setMap(DG.map(id, {
      'center': [position.lon, position.lat],
      'zoom': ZOOM
    }));
    } catch(e) {console.error(e)};
  }, [position]);

  useEffect(() => {
    try {
      if(map) {
        markers.forEach(marker => {
          const {coordinate, description} = marker;
          DG.marker([coordinate.lon, coordinate.lat]).addTo(map).bindPopup(description.title);
        });
      }
    } catch(e) {console.error(e)};
  }, [markers]);

  return {setMarkers, setPosition};
};

export default useMap;
