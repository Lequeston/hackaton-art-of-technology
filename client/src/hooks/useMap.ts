import { useState, useEffect } from 'react';
import DG from "2gis-maps";
import { CoordinateMap, Organization } from '@/types/global';

const ZOOM = 13;

const useMap = (id: string) => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<Array<Organization>>([]);
  const [position, setPosition] = useState<CoordinateMap>();
  const [groupMarkers, setGroupMarkers] = useState<any>(DG.featureGroup());

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
        groupMarkers.removeFrom(map);
        const array = [];
        markers.forEach(marker => {
          const {coordinate, description} = marker;
          array.push(DG.marker([coordinate.lat, coordinate.lon]).bindPopup(description.title));
        });
        setGroupMarkers(DG.featureGroup(array));
      }
    } catch(e) {console.error(e)};
  }, [markers]);

  useEffect(() => {
    if (map && groupMarkers){
      groupMarkers.addTo(map);
    }
  }, [groupMarkers])

  return {setMarkers, setPosition};
};

export default useMap;
