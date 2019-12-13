import React from 'react';
import { Link } from 'react-router-dom';

const Instruction = props => {
  return (
    <div>
      instruction
      <Link to="/">Back to Game</Link>
      <div>
      <img src="EOTD_v1.02.png" alt="game instruction" />
      </div>
    </div>
  );
}

export default Instruction;
