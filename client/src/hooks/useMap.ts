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
        let southWest = DG.latLng(position.lat - 0.001, position.lon - 0.001);
        let northEast = DG.latLng(position.lat + 0.001, position.lon + 0.001);
        let bounds = DG.latLngBounds(southWest, northEast)
        const map = DG.map(id, {
          'center': [position.lat, position.lon],
          'zoom': ZOOM,
          'maxBounds': bounds
        });
        const myIcon = DG.icon({
          iconUrl: 'https://maps.api.2gis.ru/2.0/example_logo.png',
          iconSize: [48, 48]
        });
        DG.marker([position.lat, position.lon], {
          icon: myIcon
        }).addTo(map);
        setMap(map)
      }
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

  return {setMarkers, setPosition};
};

export default useMap;
