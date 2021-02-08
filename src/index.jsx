import React from 'react';
import ReactDOM from 'react-dom';
// import { useEffect, useState } from 'react';
import Board from './board';

function App() {
  return (
    <Board />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)