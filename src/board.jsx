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
    barStyle: {
      height: 10,
      width: 30,
      background: "black",
      left: 20,
      top: 400,
      position: "absolute"
    }
  });

  function mouseMoveHandler(e) {
    let left = 0;
    const boardStyle = state.boardStyle;
    const barStyle = state.barStyle;
    const mouseX = state.pageX - barStyle.width/2;
    if (mouseX < boardStyle.left) {
      left = 0 //boardStyle.left;
    } else if (mouseX - boardStyle.left < boardStyle.width - barStyle.width) {
      left = mouseX - boardStyle.left;
    } else {
      left = boardStyle.width - barStyle.width;
    }

    const changeBarStyle = {
      ...(state.barStyle),
      left: left
    }
    const changeState = {
      ...state,
      pageX: e.pageX,
      barStyle: changeBarStyle
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
        barStyle={state.barStyle}
      />

    </div>
  );
};

export default Board;