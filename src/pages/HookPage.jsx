import React, { useState } from 'react';

function HookPage() {
  const [state, counterData] = useCounter();
  const [inputValue, setInputValue] = useState('');
  const [val, setVal] = useState(0);

  useEffect(() => {
    counterData.setValue(val);
    console.log('useEffect', state);
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
    <>
    <div className='counterDisplay'>{state}</div>
    <form action="" onSubmit={e => e.preventDefault()}>
      <input onKeyUp={handleKeyUp} type="text" />
      <div>
        <Button handleClick={counterData.setIncrement} child="Increment" />
        <Button handleClick={counterData.reset} child="Reset" />
        <Button handleClick={counterData.setDecrement} child="Decrement" />
      </div>
    </form>
  </>
  )
}

export default HookPage