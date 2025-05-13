import React from 'react';
import { floorData, roomDetails } from '../data/kioskData';

function SVGMap({currentFloorId, selectedRoomId, highlightSpecialtyId, onRoomClick}){
  const floor = floorData[currentFloorId];
  if(!floor){
    return null;
  }
  return(
    <div className="svg-map-container">
      {floor.svg(selectedRoomId, highlightSpecialtyId, onRoomClick, roomDetails)}
    </div>
  )
}

export default SVGMap;