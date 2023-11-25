// redux/actions.js
export const changeSquareColor = (index, color) => ({
    type: 'CHANGE_SQUARE_COLOR',
    payload: { index, color },
  });
  