export function isCrashTop(ballStyle, barStyle) {
  const ballX = ballStyle.style.left;
  const ballY = ballStyle.style.top;
  const r = ballStyle.r;
  const strokeWidth = ballStyle.strokeWidth;
  const barLeft = barStyle.left;
  const barTop = barStyle.top;
  const barWidth = barStyle.width;

  if (barTop - r - strokeWidth <= ballY && ballY <= barTop) {
    if (barLeft - r <= ballX && ballX <= barLeft + barWidth + r) {
      return true;
    }
  }
  return false;
}

export function isCrashBottom(ballStyle, barStyle) {
  const ballX = ballStyle.style.left;
  const ballY = ballStyle.style.top;
  const r = ballStyle.r;
  const strokeWidth = ballStyle.strokeWidth;
  const barLeft = barStyle.left;
  const barTop = barStyle.top;
  const barWidth = barStyle.width;
  const barHeight = barStyle.height;

  if (barTop + barHeight - r <= ballY && ballY <= barTop + barHeight - strokeWidth) {
    if (barLeft - r <= ballX && ballX <= barLeft + barWidth + r) {
      return true;
    }
  }
  return false;
}

// 구현 아직 X
// export function isCrashLeft(ballStyle, barStyle) {
//   const ballX = ballStyle.style.left;
//   const ballY = ballStyle.style.top;
//   const r = ballStyle.r;
//   const strokeWidth = ballStyle.strokeWidth;
//   const barLeft = barStyle.left;
//   const barTop = barStyle.top;
//   const barWidth = barStyle.width;
//   const barHeight = barStyle.height;

//   if (barTop - strokeWidth <= ballY && ballY <= barTop + barHeight) {
//     if (barLeft - r <= ballX && ballX <= barLeft + barWidth + r) {
//       return true;
//     }
//   }
//   return false;
// }

// export function isCrashRight(ballStyle, barStyle) {
//   const ballX = ballStyle.style.left;
//   const ballY = ballStyle.style.top;
//   const r = ballStyle.r;
//   const strokeWidth = ballStyle.strokeWidth;
//   const barLeft = barStyle.left;
//   const barTop = barStyle.top;
//   const barWidth = barStyle.width;
//   const barHeight = barStyle.height;

//   if (barTop + barHeight - r <= ballY && ballY <= barTop + barHeight - strokeWidth) {
//     if (barLeft - r <= ballX && ballX <= barLeft + barWidth + r) {
//       return true;
//     }
//   }
//   return false;
// }