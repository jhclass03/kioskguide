import React from 'react';
import { floorList } from '../data/kioskData';
import './FloorSelector.css';

function FloorSelector({currentFloorId, onSelectFloor}){
  return(
    <div className="selector-panel floor-selector">
      <h3>층 선택</h3>
      {floorList.map((floor)=>(
        <button key={floor.id} 
                className={currentFloorId === floor.id ? 'active':''}
                onClick={()=> onSelectFloor(floor.id)}
        >
          {floor.name}
        </button>
      ))}
    </div>
  )
}

export default FloorSelector;