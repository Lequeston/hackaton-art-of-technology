import { useState, useEffect } from 'react';
import DG from "2gis-maps";
import { CoordinateMap, Organization } from '@/types/global';

const ZOOM = 13;

const useMap = (id: string) => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<Array<Organization>>([]);
  const [position, setPosition] = useState<CoordinateMap>();

  useEffect(() => {
    try {
      console.log(position)
      if (position) {
        setMap(DG.map(id, {
          'center': [position.lat, position.lon],
          'zoom': ZOOM
        }));
      }
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
