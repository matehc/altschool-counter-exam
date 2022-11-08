import { React, useReducer, useState, useEffect } from 'react';
import Button from '../components/button/Button.component';
import countReducer from '../reducers/count.reducer';
import { ACTIONS } from '../constants/constants';

function ReducePage() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  console.log('the state', state);

  const [parsedNumber, setParsedNumber] = useState(0);

  useEffect(() => {
    dispatch({ type: ACTIONS.ADDSTATE, payload: parsedNumber });
    console.log('effect called');
    console.log('useEffect', state.count);
  }, [parsedNumber]);

  const handleIncrement = e => {
    e.preventDefault();
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const handleDecrement = e => {
    e.preventDefault();
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const handleReset = e => {
    e.preventDefault();
    dispatch({ type: ACTIONS.RESET });
    console.log(state.count);
  };

  const handleKeyUp = e => {
    try {
      const input = e.target.value;

      if (e.key === 'Enter') {
        const num = parseInt(input);
        if (!isNaN(num)) {
          setParsedNumber(num);
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
    <h2 className='heading-2'>useReducer Counter</h2>
      <p className="counterDisplay">{state.count}</p>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input className='number-input' onKeyUp={handleKeyUp} type="text" />
        <div className='button-container mt-20'>
          <Button handleClick={handleIncrement} child="Increment" />
          <Button handleClick={handleReset} child="Reset" />
          <Button handleClick={handleDecrement} child="Decrement" />
        </div>
      </form>
    </section>
  );
}

export default ReducePage;
