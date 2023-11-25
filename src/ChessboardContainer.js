// components/ChessboardContainer.js
import { connect } from 'react-redux';
import Chessboard from './components/Chessboard';
import { changeSquareColor } from '../src/Redux/Action';

const mapStateToProps = (state) => {
    return {
      squares: state.chess.squares,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onSquareClick: (index) => {
        const color = index % 2 === 0 ? 'yellow' : 'red';
        dispatch(changeSquareColor(index, color));
      },
    };
  };
  
  const ChessboardContainer = connect(mapStateToProps, mapDispatchToProps)(Chessboard);
  
  export default ChessboardContainer;