import React, { useState, useEffect } from 'react';
import Button from '../components/button/Button.component';
import useCounter from '../hooks/useCounter.hook';

function HookPage() {
  const [state, counterData] = useCounter();
  const [inputValue, setInputValue] = useState('');
  const [val, setVal] = useState(0);

  useEffect(() => {
    counterData.setValue(val);
    // console.log('useEffect', state);
  }, [val]);

  const handleKeyUp = e => {
    try {
      console.log(e);
      const input = e.target.value;
      setInputValue(input);
      if (e.key === 'Enter') {
        console.log(inputValue);
        const num = parseInt(inputValue);
        if (!isNaN(num)) {
          setVal(num);
        } else {
          console.log('NOT A NUMBER');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section>
    <h2 className='heading-2'>Custom Hook Counter</h2>
      <p className="counterDisplay">{state}</p>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input className='number-input' onKeyUp={handleKeyUp} type="text" />
        
        <div className='button-container count-bt-container mt-20'>
          <Button handleClick={counterData.setIncrement} child="Increment" />
          <Button handleClick={counterData.reset} child="Reset" />
          <Button handleClick={counterData.setDecrement} child="Decrement" />
        </div>
      </form>
    </section>
  );
}

export default HookPage;
