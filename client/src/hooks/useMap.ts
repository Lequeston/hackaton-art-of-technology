import { useState, useEffect } from 'react';
import DG from "2gis-maps";
import { CoordinateMap, Organization } from '@/types/global';

const ZOOM = 13;

const useMap = (id: string) => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<Array<Organization>>([]);
  const [position, setPosition] = useState<CoordinateMap>({lat: 54.98, lon: 82.89});

  useEffect(() => {
    try {
      if (position) {
        const map = DG.map(id, {
          'center': [position.lat, position.lon],
          'zoom': ZOOM,
          'dragging': false,
          'scrollWheelZoom': 'center' 
        });
        setMap(map);
      }
    } catch(e) {console.error(e)};
  }, []);

  useEffect(() => {
    try {
      if (map && position) {
        const latlngPos = DG.latLng(position.lat, position.lon);
        map.flyTo(latlngPos);
      };
    } catch(e) {console.error(e)};
  }, [position]);

  useEffect(() => {
    try {
      if(map && markers) {
        markers.forEach(marker => {
          const {coordinate, description} = marker;
          DG.marker([coordinate.lat, coordinate.lon]).addTo(map).bindPopup(description.title);
        });
      }
    } catch(e) {console.error(e)};
  }, [markers]);

  return {setMarkers, setPosition, position};
};

export default useMap;
