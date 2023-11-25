import React from 'react';

const Square = ({ onClick, color }) => {
  const style = {
    width: '50px',
    height: '50px',
    backgroundColor: color,
    border: '1px solid black',
  };

  return <div style={style} onClick={onClick}></div>;
};

export default Square;
