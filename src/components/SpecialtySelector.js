import React from 'react';
import { specialtyList } from '../data/kioskData';
import './SpecialtySelector.css';

function SpecialtySelector({selectedSpecialtyId, onSelectSpecialty}){
  return(
    <div className='selector-panel specialty-selector'>
      <h3>진료과목</h3>
      {
        specialtyList.map((specialty)=>(
          <button key={specialty.id} 
                  className={selectedSpecialtyId===specialty.id ? 'active':''}
                  onClick={()=> onSelectSpecialty(specialty.id)}
          >
            {specialty.name}
          </button>
        ))
      }
    </div>
  )
}

export default SpecialtySelector;