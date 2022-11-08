import React, { useState } from 'react';
import Button from '../components/button/Button.component';

function ErrorBoundaryPage() {
  const [errorCount, setErrorCount] = useState(0);

  const handleClick = (e)=>{
    console.log()
    e.preventDefault();
    setErrorCount(prev => prev + 1);
  }

  if(errorCount === 5) {
    throw new Error('Something is wrong');
  }
  return (
    <section className='error-section'>
    <h2 className='heading-2'>Error Boundary Test</h2>
      <p>Increase the button to increment the number until it equals 5</p>
      <p>{errorCount}</p>
      <Button handleClick ={handleClick} child="+"/>
    </section>
  )
}

export default ErrorBoundaryPage