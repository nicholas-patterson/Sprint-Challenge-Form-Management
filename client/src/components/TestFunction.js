export const updateBalls = () => {
  if (balls >= 4) {
    setBalls(0);
  } else {
    setBalls(balls + 1);
  }
};
