import { useState } from 'react';
import Movebar from './moveBar'
import Ball from './ball/ball'
import Sizebar from './sizebar'

function Board() {
  const styles = {
    boardHeight: 48,
    boardWidth: 32,
    boardLeft: 2,
    barHeight: 1,
    barWidth: 3,
    barLeft: 2,
    barTop: 40
  }
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
    },
    size: 10
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

  function boardSizeHandler(e) {
    console.log(e.target.value);
    if (!isNaN(e.target.value) && e.target.value >= 1) {
      const size = e.target.value;
      const changeBoardStyle = {
        ...(state.boardStyle),
        height: styles.boardHeight * size,
        width: styles.boardWidth * size,
        left: styles.boardLeft * size,
      }
      const changeBarStyle = {
        ...(state.barStyle),
        height: styles.barHeight * size,
        width: styles.barWidth * size,
        left: styles.barLeft * size,
        top: styles.barTop * size
      }
      const changeState = {
        ...state,
        boardStyle: changeBoardStyle,
        barStyle: changeBarStyle,
        size: size,
      }
      setState(changeState);
    }
  }

  return (
    <>
      <div
        style={state.boardStyle}
        onMouseMove={mouseMoveHandler}
      >
        <Ball 
          boardStyle={state.boardStyle}
          barStyle={state.barStyle}
        />
        <Movebar
          barStyle={state.barStyle}
        />

      </div>
      <Sizebar 
        value={state.size}
        height={state.boardStyle.height}
        handleChange={boardSizeHandler}
      />
    </>
  );
};

export default Board;