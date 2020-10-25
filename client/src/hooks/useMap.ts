import { useState, useEffect } from 'react';
import DG from "2gis-maps";
import { CoordinateMap, Organization } from '@/types/global';

const ZOOM = 5;

const useMap = (id: string, initialPosition: CoordinateMap) => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<Array<Organization>>([]);
  const [groupMarkers, setGroupMarkers] = useState<any>(DG.featureGroup());
  const [position, setPosition] = useState<CoordinateMap>(initialPosition);

  useEffect(() => {
    try {
      const map = DG.map(id, {
        'center': [position.lat, position.lon],
        'zoom': ZOOM,
      });
      setMap(map);
    } catch(e) {
      console.error(e);
    };
  }, []);
 
  useEffect(() => {
    try {
      if (map) {
        DG.control.location().addTo(map);
        DG.control.scale().addTo(map);
      };
    } catch(e) {
      console.error(e)
    };
  }, [map]);

  useEffect(() => {
    try {
      if(map && markers) {
        groupMarkers.removeFrom(map);
        const array = [];
        markers.forEach(marker => {
          const {coordinate, description} = marker;
          array.push(DG.marker([coordinate.lat, coordinate.lon]).bindPopup(description.title));
        });
        console.log('!!!!!!', array);
        setGroupMarkers(DG.featureGroup(array));
      }
    } catch(e) {console.error(e)};
  }, [markers]);

  useEffect(() => {
    if (map && groupMarkers){
      console.log('yes');
      groupMarkers.addTo(map);
    }
  }, [groupMarkers])

  return {setMarkers, setPosition};
};

export default useMap;
