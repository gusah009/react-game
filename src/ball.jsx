import { Fragment, useState, useRef, useEffect } from "react";

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
  const changeDir = {
    ...state,
  }
  // 공 크기 조절해야댐
  if (state.style.left < 0) {
    changeDir.dir.x = -changeDir.dir.x;
    state.style.left = 0;
    setState(changeDir);
  } else if (state.style.left > boardStyle.width - state.style.width) {
    changeDir.dir.x = -changeDir.dir.x;
    state.style.left = boardStyle.width - state.style.width;
    setState(changeDir);
  } else if (state.style.top < 0) {
    changeDir.dir.y = -changeDir.dir.y;
    state.style.top = 0;
    setState(changeDir);
  } else if (state.style.top > boardStyle.height - state.style.height) {
    changeDir.dir.y = -changeDir.dir.y;
    state.style.top = boardStyle.height - state.style.height;
    setState(changeDir);
  }
}


function barCrash(state, setState, barStyle) {
  const changeDir = {
    ...state,
  }
  // 공 크기 조절해야댐
  if (state.style.left < 0) {
    changeDir.dir.x = -changeDir.dir.x;
    state.style.left = 0;
    setState(changeDir);
  } else if (state.style.left > barStyle.width - state.style.width) {
    changeDir.dir.x = -changeDir.dir.x;
    state.style.left = barStyle.width - state.style.width;
    setState(changeDir);
  } else if (state.style.top < 0) {
    changeDir.dir.y = -changeDir.dir.y;
    state.style.top = 0;
    setState(changeDir);
  } else if (state.style.top > barStyle.height - state.style.height) {
    changeDir.dir.y = -changeDir.dir.y;
    state.style.top = barStyle.height - state.style.height;
    setState(changeDir);
  }
}

function Ball(props) {
  // const [intervalId, setIntervalId] = useState({});
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
    }
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

  const circle = 
  (
    <svg style={state.style}>
      <circle cx={5} cy={5} r={4} stroke="black" strokeWidth={1} fill="red" />
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