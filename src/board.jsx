import { useState } from 'react';
import Movebar from './moveBar'
import Ball from './ball'


function Board() {
  const [state, setState] = useState({
    pageX: 0,
    boardStyle:{
      border: "solid 1px",
      height: 480,
      width: 320,
      left: 20,
      position:"absolute"
    },
  });

  let barInfo = {};
  function handleBarChange(barInf) {
    barInfo = barInf;
    console.log(barInfo);
  }

  function mouseMoveHandler(e) {
    const changeState = {
      ...state,
      pageX: e.pageX
    }
    setState(changeState);
  }

  return (
    <div
      style={state.boardStyle}
      onMouseMove={mouseMoveHandler}
    >
      <Ball 
        boardStyle={state.boardStyle}
      />
      <Movebar
        posX={state.pageX}
        boardStyle={state.boardStyle}
        onBarChange={handleBarChange}
      />

    </div>
  )
}

export default Board;