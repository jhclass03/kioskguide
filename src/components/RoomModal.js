import React from 'react';
import './RoomModal.css';

function RoomModal({isVisible, roomInfo, onClose}){
  if(!isVisible){
    return null;
  }
  return(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
        <h3>호실 정보</h3>
        {
          roomInfo ? (
            <>
              <p><strong>진료과목</strong> {roomInfo.specialty}</p>
              <p><strong>진료시간</strong> {roomInfo.hours}</p>
            </>
          ) : (
            <p>정보를 찾을 수 없습니다.</p>
          )
        }
        <button className="modal-close-button" onClick={onClose}>닫기</button>
      </div>
    </div>
  )
}

export default RoomModal;