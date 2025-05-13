export const floorData = {
  'floor1': {
    name: '1층',
    svg: (selectedRoomId, highlightSpecialtyId, handleRoomClick, roomDetails) => ( 
      <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="480" height="380" fill="#f5f5f5" stroke="#ccc" strokeWidth="2" />
        <text x="250" y="50" textAnchor="middle" fontSize="24" fill="#333">1층 안내도</text>
        {/* 호실 101 */}
        <path
          data-room-id="room101"
          d="M 50 100 L 150 110 L 160 150 L 40 140 Z"
          fill={
            selectedRoomId === 'room101' ? '#ffff00' : // 선택된 호실은 노란색
            (highlightSpecialtyId && roomDetails['room101']?.specialty === highlightSpecialtyId) ? '#aaffaa' : // 강조될 호실은 연두색
            '#e0e0e0' // 기본 색상
          }
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room101')}
          style={{ cursor: 'pointer' }}
        />
        {/* 호실 102 */}
         <path
          data-room-id="room102"
          d="M 200 100 L 300 90 L 310 130 L 210 140 Z"
          fill={
            selectedRoomId === 'room102' ? '#ffff00' :
            (highlightSpecialtyId && roomDetails['room102']?.specialty === highlightSpecialtyId) ? '#aaffaa' :
            '#e0e0e0'
          }
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room102')}
           style={{ cursor: 'pointer' }}
        />
        {/* 호실 103 */}
         <g
          data-room-id="room103"
          fill={
            selectedRoomId === 'room103' ? '#ffff00' :
            (highlightSpecialtyId && roomDetails['room103']?.specialty === highlightSpecialtyId) ? '#aaffaa' :
            '#e0e0e0'
          }
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room103')}
          style={{ cursor: 'pointer' }}
        >
           <rect x="350" y="100" width="100" height="40" rx="5" ry="5"/> {/* 사각형 형태의 영역 */}
           <text x="400" y="125" textAnchor="middle" fontSize="16" fill="#333">103호</text> {/* 호실 번호 텍스트 */}
        </g>

        {/* 기타 맵 구성 요소 (복도, 계단, 엘리베이터 등) - 클릭 이벤트 없음 */}
        <rect x="10" y="150" width="480" height="50" fill="#ddd" stroke="#bbb" strokeWidth="1"/>
        <text x="250" y="180" textAnchor="middle" fontSize="18" fill="#555">복도</text>

      </svg>
    ),
    rooms: ['room101', 'room102', 'room103'] // 해당 층의 호실 ID 목록 (선택 사항, 데이터 조회용)
  },
  'floor2': {
    name: '2층',
     svg: (selectedRoomId, highlightSpecialtyId, handleRoomClick, roomDetails) => (
      <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="480" height="380" fill="#f5f5f5" stroke="#ccc" strokeWidth="2" />
        <text x="250" y="50" textAnchor="middle" fontSize="24" fill="#333">2층 안내도</text>

         {/* 호실 201 */}
         <path
          data-room-id="room201"
          d="M 50 100 L 150 90 L 160 130 L 40 140 Z"
          fill={selectedRoomId === 'room201' ? '#ffff00' : (highlightSpecialtyId && roomDetails['room201']?.specialty === highlightSpecialtyId) ? '#aaffaa' : '#e0e0e0'}
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room201')}
          style={{ cursor: 'pointer' }}
        />

        {/* 호실 202 */}
         <path
          data-room-id="room202"
          d="M 200 100 L 300 110 L 310 150 L 210 140 Z"
          fill={selectedRoomId === 'room202' ? '#ffff00' : (highlightSpecialtyId && roomDetails['room202']?.specialty === highlightSpecialtyId) ? '#aaffaa' : '#e0e0e0'}
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room202')}
           style={{ cursor: 'pointer' }}
        />

        {/* 호실 203 */}
         <path
          data-room-id="room203"
          d="M 350 100 L 450 90 L 460 130 L 360 140 Z"
          fill={selectedRoomId === 'room203' ? '#ffff00' : (highlightSpecialtyId && roomDetails['room203']?.specialty === highlightSpecialtyId) ? '#aaffaa' : '#e0e0e0'}
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room203')}
           style={{ cursor: 'pointer' }}
        />

        {/* 기타 맵 구성 요소 */}
        <rect x="10" y="150" width="480" height="50" fill="#ddd" stroke="#bbb" strokeWidth="1"/>
        <text x="250" y="180" textAnchor="middle" fontSize="18" fill="#555">복도</text>

      </svg>
    ),
    rooms: ['room201', 'room202', 'room203']
  },
   'floor3': {
    name: '3층',
     svg: (selectedRoomId, highlightSpecialtyId, handleRoomClick, roomDetails) => (
      <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="480" height="380" fill="#f5f5f5" stroke="#ccc" strokeWidth="2" />
        <text x="250" y="50" textAnchor="middle" fontSize="24" fill="#333">3층 안내도</text>

         {/* 호실 301 */}
         <path
          data-room-id="room301"
          d="M 50 100 L 150 110 L 160 150 L 40 140 Z"
          fill={selectedRoomId === 'room301' ? '#ffff00' : (highlightSpecialtyId && roomDetails['room301']?.specialty === highlightSpecialtyId) ? '#aaffaa' : '#e0e0e0'}
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room301')}
          style={{ cursor: 'pointer' }}
        />

        {/* 호실 302 */}
         <path
          data-room-id="room302"
          d="M 200 100 L 300 90 L 310 130 L 210 140 Z"
          fill={selectedRoomId === 'room302' ? '#ffff00' : (highlightSpecialtyId && roomDetails['room302']?.specialty === highlightSpecialtyId) ? '#aaffaa' : '#e0e0e0'}
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room302')}
           style={{ cursor: 'pointer' }}
        />

        {/* 호실 303 */}
         <path
          data-room-id="room303"
          d="M 350 100 L 450 110 L 460 150 L 360 140 Z"
          fill={selectedRoomId === 'room303' ? '#ffff00' : (highlightSpecialtyId && roomDetails['room303']?.specialty === highlightSpecialtyId) ? '#aaffaa' : '#e0e0e0'}
          stroke="#000"
          strokeWidth="2"
          onClick={() => handleRoomClick('room303')}
           style={{ cursor: 'pointer' }}
        />

        {/* 기타 맵 구성 요소 */}
        <rect x="10" y="150" width="480" height="50" fill="#ddd" stroke="#bbb" strokeWidth="1"/>
        <text x="250" y="180" textAnchor="middle" fontSize="18" fill="#555">복도</text>
      </svg>
    ),
    rooms: ['room301', 'room302', 'room303']
  }
};


// 각 호실의 상세 정보 (진료과목, 진료시간 등)를 정의합니다.
// 호실 ID를 키로 사용합니다.
export const roomDetails = {
  'room101': { specialty: '내과', hours: '09:00 - 18:00', floorId: 'floor1' },
  'room102': { specialty: '외과', hours: '09:00 - 17:00', floorId: 'floor1' },
  'room103': { specialty: '피부과', hours: '10:00 - 19:00', floorId: 'floor1' },
  'room201': { specialty: '소아과', hours: '09:30 - 18:30', floorId: 'floor2' },
  'room202': { specialty: '치과', hours: '10:00 - 18:00', floorId: 'floor2' },
  'room203': { specialty: '안과', hours: '09:00 - 17:00', floorId: 'floor2' },
  'room301': { specialty: '정형외과', hours: '09:00 - 17:00', floorId: 'floor3' },
  'room302': { specialty: '신경외과', hours: '10:00 - 16:00', floorId: 'floor3' },
  'room303': { specialty: '이비인후과', hours: '09:30 - 18:00', floorId: 'floor3' },
};

// 진료과목 목록을 정의합니다.
// 진료과목 ID를 키로 사용하며, 해당 과목이 주로 위치한 층의 ID를 포함시킵니다.
export const specialties = {
  '내과': { name: '내과', floorId: 'floor1' },
  '외과': { name: '외과', floorId: 'floor1' },
  '피부과': { name: '피부과', floorId: 'floor1' },
  '소아과': { name: '소아과', floorId: 'floor2' },
  '치과': { name: '치과', floorId: 'floor2' },
  '안과': { name: '안과', floorId: 'floor2' },
  '정형외과': { name: '정형외과', floorId: 'floor3' },
  '신경외과': { name: '신경외과', floorId: 'floor3' },
  '이비인후과': { name: '이비인후과', floorId: 'floor3' },
};

// 진료과목 목록을 배열 형태로 변환 (컴포넌트에서 렌더링하기 편리하도록)
export const specialtyList = Object.keys(specialties).map(key => ({
    id: key,
    name: specialties[key].name,
    floorId: specialties[key].floorId
}));

// 층 목록을 배열 형태로 변환 [ "1층","2층","3층"]
export const floorList = Object.keys(floorData).map(key => ({
    id: key,
    name: floorData[key].name
}));
