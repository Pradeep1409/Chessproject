// redux/reducers.js
const initialState = {
    squares: Array(64).fill(null).map((_, index) => (index % 2 === Math.floor(index / 8) % 2 ? 'white' : 'black')),
  };
  
  const chessReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_SQUARE_COLOR':
        const { index, color } = action.payload;
        const newSquares = [...state.squares];
        newSquares[index] = color;
        return { ...state, squares: newSquares };
  
      default:
        return state;
    }
  };
  
  export default chessReducer;
  