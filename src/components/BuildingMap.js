import React, {useState,useEffect} from 'react';
import SVGMap from './SVGMap';
import RoomModal from './RoomModal';
import { roomDetails } from '../data/kioskData';

function BuildingMap({currentFloorId, highlightSpecialtyId}){
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalRoomInfo, setModalRoomInfo] = useState(null);

  useEffect(()=>{
    setSelectedRoomId(null);
    setIsModalVisible(false);
    setModalRoomInfo(null);
  },[currentFloorId, highlightSpecialtyId])

  const handleRoomClick = (roomId) =>{
    const roomInfo = roomDetails[roomId];
    if( selectedRoomId===roomId ){
      setSelectedRoomId(null);
      setIsModalVisible(false);
      setModalRoomInfo(null);
    }else{
      setSelectedRoomId(roomId);
      if(roomInfo){
        setIsModalVisible(true);
        setModalRoomInfo(roomInfo);
      }else{
        setIsModalVisible(false);
        setModalRoomInfo(null);
      }      
    }
  }

  const handleModalClose = () =>{
    setIsModalVisible(false);
  }

  return(
    <div className="building-map-area">
      <SVGMap
        currentFloorId={currentFloorId}
        selectedRoomId={selectedRoomId}
        highlightSpecialtyId={highlightSpecialtyId}
        onRoomClick={handleRoomClick}
      />
      <RoomModal
        isVisible={isModalVisible}
        roomInfo={modalRoomInfo}
        onClose={handleModalClose}
      />
    </div>
  )

}

export default BuildingMap;