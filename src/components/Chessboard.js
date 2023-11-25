// components/Chessboard.js
import React from 'react';
import Square from './Square';

const Chessboard = ({ squares, onSquareClick }) => {
  return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 50px)',
      gap: '0px',
      marginTop:'150px',
      justifyContent: 'center',
    }}
  >
    {squares.map((color, index) => (
      <Square key={index} color={color} onClick={() => onSquareClick(index)} />
    ))}
  </div>
  );
};

export default Chessboard;
