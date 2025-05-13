import React from 'react';
function Buttons({onButtonClick}){
  return(
    <div>
      <h2> component menu </h2>
      <button style={{marginBottom:'10px'}} onClick={()=> onButtonClick('A')}> 컴포넌트 A 보기 </button>
      <button style={{marginBottom:'10px'}} onClick={()=> onButtonClick('B')}> 컴포넌트 B 보기 </button>
      <button style={{marginBottom:'10px'}} onClick={()=> onButtonClick('C')}> 컴포넌트 C 보기 </button>
    </div>
  )
}
export default Buttons;