import { useState, useEffect } from 'react';
import DG from "2gis-maps";
import { CoordinateMap, Organization } from '@/types/global';
import { useDispatch } from 'react-redux';
import { parseUserPosition } from '@/redux/Location/LocationAction';

const ZOOM = 5;

const useMap = (id: string, initialPosition: CoordinateMap) => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<Array<Organization>>([]);
  const [groupMarkers, setGroupMarkers] = useState<any>(DG.featureGroup());
  const [position, setPosition] = useState<CoordinateMap>(initialPosition);
  const dispatch = useDispatch();
  
  useEffect(() => {
    try {
      const map = DG.map(id, {
        'center': [position.lat, position.lon],
        'zoom': ZOOM,
      });
      map.locate({setView: true, watch: true})
        .on('locationfound', function(e) {
          dispatch(parseUserPosition(e.latitude, e.longitude));
        })
        .on('locationerror', function(e) {
          console.error('Дайте доступ геопозиции');
        });
      setMap(map);
    } catch(e) {
      console.error(e);
    };
  }, []);
 
  useEffect(() => {
    try {
      if (map) {
        DG
          .control
          .location({drawCircle: false, follow: true, stopFollowingOnDrag: true, position: 'bottomright'}).addTo(map);
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
