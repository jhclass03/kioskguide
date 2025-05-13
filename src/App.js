import './App.css';
import React, { useState, useEffect } from 'react';
import FloorSelector from './components/FloorSelector';
import SpecialtySelector from './components/SpecialtySelector';
import BuildingMap from './components/BuildingMap';
import { floorList, specialties } from './data/kioskData';

function App() {
  const [currentFloorId, setCurrentFloorId] = useState(floorList[0]?.id || null);
  //floorList배열 첫번째 요소 id가 층 선택 초기값 : 1층 
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState(null);
  //선택된 진료과목 id  초기값 null ( 미선택 상태 )
  const [prevFloorId, setPrevFloorId] = useState(null);
  //전환효과시 필요 - 기존(이전) 층 id 저장 

  useEffect(()=>{
    if(prevFloorId !== currentFloorId){ // 선택한 층이 기존층과 다른 경우에 한해
      const timeout = setTimeout(()=>setPrevFloorId(null), 500);
      // 전환효과 0.5초 지난 후 이전 층 정의 id값을 null 처리
      return ()=> clearTimeout(timeout); 
    }
  }, [currentFloorId, prevFloorId])

  const handleFloorSelect = (floorId) =>{ // 층 선택 클릭할 때 실행
    if( floorId !== currentFloorId){  // 새로 클릭한 층이 현재 층과 다른경우
      setPrevFloorId( currentFloorId ); // 새로 선택된 층이 현재층으로 - 다음 전환효과 대비
      setCurrentFloorId(floorId);   // 현재 층 
      setSelectedSpecialtyId(null);  // 선택 진료과목 초기화
    }
  }
  const handleSpecialtySelect = (specialtyId) =>{
    setSelectedSpecialtyId(specialtyId);  //선택 진료과목 id를 저장
    const targetFloorId = specialties[specialtyId]?.floorId; //층 id 검증
    if(targetFloorId && currentFloorId !== targetFloorId){ // 현재 층과 다른상태, 층 id존재판단
      setPrevFloorId(currentFloorId); // 이전층(현재로) 정의 - 다음 전환효과 대비
      setCurrentFloorId(targetFloorId); // 진료과목 있는 층을 현재 층으로 정의
    }
  }
  if(!currentFloorId){
    return<div> Loading error... </div>
  }
  return (
    <div className="kiosk-container">
      <FloorSelector
        currentFloorId={currentFloorId}
        onSelectFloor={handleFloorSelect}
      />
      <div className="map-area-wrapper">
        {prevFloorId && (
          <div className="floor-map-container exit">
            <BuildingMap 
              currentFloorId={prevFloorId} 
              highlightSpecialtyId={selectedSpecialtyId} 
            />
          </div>
        )}
        <div className={`floor-map-container enter ${prevFloorId ? 'with-prev':''}`}>
          <BuildingMap 
            currentFloorId={currentFloorId} 
            highlightSpecialtyId={selectedSpecialtyId} 
          />
        </div>
      </div>
      <SpecialtySelector 
        selectedSpecialtyId={selectedSpecialtyId} 
        onSelectSpecialty={handleSpecialtySelect} 
      />
    </div>
  );
}

export default App;
