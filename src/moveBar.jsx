function Movebar(props) {
  const barStyle = {
    height: 10,
    width: 30,
    background: "black",
    left: 20,
    top: 400,
    position: "absolute"
  };
  const boardStyle = props.boardStyle;

  if (props.posX < boardStyle.left) {
    barStyle.left = 0 //boardStyle.left;
  } else if (props.posX - boardStyle.left < boardStyle.width - barStyle.width) {
    barStyle.left = props.posX - boardStyle.left;
  } else {
    barStyle.left = boardStyle.width - barStyle.width;
  }
  
  props.onBarChange(barStyle);
  
  return (
    <div style={barStyle}>

    </div>
  )
}

export default Movebar;