import React from ' react';

import './error.css';

const ErrorIndicator = () => {
  return (
      <div className='error-indication'>
        <span className='boom'>BOOM!</span>
        <span>something has gone terribly wrong</span>
        <span>(but we already sent droids to fix it)</span>
      </div>
  )
}

export default ErrorIndicator;