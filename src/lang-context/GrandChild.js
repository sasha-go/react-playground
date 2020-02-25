import React from 'react'
import GreatGrandChild from './GreatGrandChild'

function GrandChild() {
  return (
    <div className='GrandChild'>
      <GreatGrandChild />
    </div>
  );
}

export default GrandChild;