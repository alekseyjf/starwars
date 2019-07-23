import React from 'react';

import './error.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
      <div className='error-indication'>
        <img className='error-icon' src={icon} alt="death-star"/>
        <span className='boom'>BOOM!</span>
        <span>something has gone terribly wrong</span>
        <span>(but we already sent droids to fix it)</span>
      </div>
  )
}

export default ErrorIndicator;