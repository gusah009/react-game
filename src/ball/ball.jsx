import { Fragment, useState, useRef, useEffect } from "react";
import { isCrashTop, isCrashBottom } from './isCrash';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function boardCrash(state, setState, boardStyle) {
  const changeState = {
    ...state,
  }
  const changeStyle = {
    ...(state.style)
  }
  // 공 크기 조절해야댐
  if (state.style.left < 0) {
    changeState.dir.x = -changeState.dir.x;
    changeStyle.left = 0;
    changeState.style = changeStyle;
    setState(changeState);
  } else if (changeStyle.left > boardStyle.width - changeStyle.width) {
    changeState.dir.x = -changeState.dir.x;
    changeStyle.left = boardStyle.width - changeStyle.width;
    changeState.style = changeStyle;
    setState(changeState);
  } else if (changeStyle.top < 0) {
    changeState.dir.y = -changeState.dir.y;
    changeStyle.top = 0;
    changeState.style = changeStyle;
    setState(changeState);
  } else if (changeStyle.top > boardStyle.height - changeStyle.height) {
    changeState.dir.y = -changeState.dir.y;
    changeStyle.top = boardStyle.height - changeStyle.height;
    changeState.style = changeStyle;
    setState(changeState);
  }
}


function barCrash(state, setState, barStyle) {
  const changeDir = {
    ...state,
  }
  if(isCrashTop(state, barStyle)) {
    if (!changeDir.touchFlag) {
      changeDir.dir.y = -changeDir.dir.y;
      changeDir.touchFlag = true;
      setState(changeDir);
    }
  } else if (isCrashBottom(state, barStyle)){
    if (!changeDir.touchFlag) {
      changeDir.dir.y = -changeDir.dir.y;
      changeDir.touchFlag = true;
      setState(changeDir);
    }
  } else {
    if (changeDir.touchFlag) {
      changeDir.touchFlag = false;
      setState(changeDir);
    }
  }
}

function Ball(props) {
  const [state, setState] = useState({
    style: {
      height: 10,
      width: 10,
      left: 0,
      top: 0,
      position: "absolute",
    },
    dir: {
      x: 1,
      y: 1,
    },
    r: 4,
    strokeWidth: 1,
    touchFlag: false,
  });

  useInterval(() => {
    const changePos = {
      ...state,
      style: {
        left: 1 * state.dir.x + state.style.left,
        top: 1 * state.dir.y + state.style.top,
        position: "absolute",
        height: 10,
        width: 10,
      },
    }
    setState(changePos);
  }, 10);

  boardCrash(state, setState, props.boardStyle);
  barCrash(state, setState, props.barStyle);

  const circle = 
  (
    <svg style={state.style}>
      <circle cx={5} cy={5} r={state.r} stroke="black" strokeWidth={state.strokeWidth} fill="red" />
    </svg>
  )

return (
  <Fragment>
    {/* <button onClick={onClickHandler}>Click Me!</button> */}
    {circle}
  </Fragment>
  )
}

export default Ball;